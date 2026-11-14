/**
 * Contact form validation, sanitization and anti-spam helpers (server-safe).
 */

export interface ContactFormInput {
  name: string
  email: string
  message: string
  honeypot: string
}

export interface ContactFormPayload {
  name: string
  email: string
  message: string
}

export type ContactValidationResult =
  | { ok: true; data: ContactFormPayload; isSpam: false }
  | { ok: true; data: null; isSpam: true }
  | { ok: false; error: string; status: 400 }

const NAME_MAX = 100
const EMAIL_MAX = 254
const MESSAGE_MAX = 5000
const MESSAGE_MIN = 10

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/** Strip control characters and normalize whitespace. */
export function sanitizeText(value: string): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function sanitizeMultiline(value: string): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/\r\n/g, '\n')
    .replace(/[^\S\n]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export function isValidEmail(email: string): boolean {
  if (email.length === 0 || email.length > EMAIL_MAX) {
    return false
  }
  return EMAIL_PATTERN.test(email)
}

export function parseContactFormData(formData: FormData): ContactFormInput {
  return {
    name: String(formData.get('name') ?? ''),
    email: String(formData.get('email') ?? ''),
    message: String(formData.get('message') ?? ''),
    honeypot: String(formData.get('bot-field') ?? ''),
  }
}

export function validateContactForm(input: ContactFormInput): ContactValidationResult {
  // Honeypot: treat as success without processing (do not tip off bots).
  if (sanitizeText(input.honeypot).length > 0) {
    return { ok: true, data: null, isSpam: true }
  }

  const name = sanitizeText(input.name)
  const email = sanitizeText(input.email).toLowerCase()
  const message = sanitizeMultiline(input.message)

  if (!name || !email || !message) {
    return { ok: false, error: 'Todos los campos son obligatorios.', status: 400 }
  }

  if (name.length > NAME_MAX) {
    return { ok: false, error: 'El nombre es demasiado largo.', status: 400 }
  }

  if (!isValidEmail(email)) {
    return { ok: false, error: 'El email no tiene un formato válido.', status: 400 }
  }

  if (message.length < MESSAGE_MIN) {
    return { ok: false, error: 'El mensaje es demasiado corto.', status: 400 }
  }

  if (message.length > MESSAGE_MAX) {
    return { ok: false, error: 'El mensaje es demasiado largo.', status: 400 }
  }

  return {
    ok: true,
    isSpam: false,
    data: { name, email, message },
  }
}

/**
 * In-memory rate limit / dedupe (best-effort only).
 *
 * On Vercel Serverless this Map lives in a single function instance:
 * it is NOT shared across instances, regions, or cold starts.
 * It can reduce accidental double-submits on the same warm instance,
 * but it is not a distributed anti-spam control. Honeypot + validation
 * remain the reliable first line of defense (no Redis/KV by design).
 */
const recentSubmissions = new Map<string, number>()
const RATE_LIMIT_MS = 60_000
const DEDUPE_MS = 30_000

function pruneMap(map: Map<string, number>, maxAgeMs: number, now: number): void {
  for (const [key, timestamp] of map) {
    if (now - timestamp > maxAgeMs) {
      map.delete(key)
    }
  }
}

export function checkRateLimit(key: string, now = Date.now()): boolean {
  pruneMap(recentSubmissions, RATE_LIMIT_MS * 2, now)
  const last = recentSubmissions.get(`rate:${key}`)
  if (last !== undefined && now - last < RATE_LIMIT_MS) {
    return false
  }
  recentSubmissions.set(`rate:${key}`, now)
  return true
}

export function checkDuplicateSubmission(fingerprint: string, now = Date.now()): boolean {
  pruneMap(recentSubmissions, DEDUPE_MS * 2, now)
  const last = recentSubmissions.get(`dupe:${fingerprint}`)
  if (last !== undefined && now - last < DEDUPE_MS) {
    return false
  }
  recentSubmissions.set(`dupe:${fingerprint}`, now)
  return true
}

export function buildSubmissionFingerprint(data: ContactFormPayload): string {
  return `${data.email}|${data.message.slice(0, 200)}`
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim()
    if (first) {
      return first
    }
  }
  const realIp = request.headers.get('x-real-ip')?.trim()
  if (realIp) {
    return realIp
  }
  return 'unknown'
}
