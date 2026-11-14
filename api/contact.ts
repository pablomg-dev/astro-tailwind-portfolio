import { Resend } from 'resend'
import { sendContactEmails, type OutboundEmail } from '../src/lib/contactEmails.js'
import {
  buildSubmissionFingerprint,
  checkDuplicateSubmission,
  checkRateLimit,
  getClientIp,
  parseContactFormData,
  validateContactForm,
} from '../src/lib/contactForm.js'

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
}

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS })
}

function readEnv(value: string | undefined): string | null {
  if (typeof value !== 'string' || value.trim().length === 0) {
    return null
  }
  return value.trim()
}

function getContactEnv() {
  return {
    apiKey: readEnv(process.env.RESEND_API_KEY),
    toEmail: readEnv(process.env.CONTACT_TO_EMAIL),
    fromEmail: readEnv(process.env.CONTACT_FROM_EMAIL),
  }
}

function logSafeError(scope: string, error: unknown): void {
  if (error instanceof Error) {
    console.error(`[contact] ${scope}`, {
      name: error.name,
      message: error.message,
    })
    return
  }

  if (error && typeof error === 'object') {
    const record = error as { name?: unknown; message?: unknown }
    console.error(`[contact] ${scope}`, {
      name: typeof record.name === 'string' ? record.name : 'UnknownError',
      message: typeof record.message === 'string' ? record.message : 'unknown',
    })
    return
  }

  console.error(`[contact] ${scope}`)
}

async function parseBody(request: Request): Promise<FormData | Response> {
  const contentType = request.headers.get('content-type') ?? ''

  if (
    !contentType.includes('application/x-www-form-urlencoded') &&
    !contentType.includes('multipart/form-data') &&
    !contentType.includes('application/json')
  ) {
    return jsonResponse({ ok: false, error: 'Content-Type no soportado.' }, 415)
  }

  if (contentType.includes('application/json')) {
    const json = (await request.json()) as Record<string, unknown>
    const formData = new FormData()
    for (const [key, value] of Object.entries(json)) {
      if (typeof value === 'string') {
        formData.append(key, value)
      }
    }
    return formData
  }

  return request.formData()
}

export async function POST(request: Request): Promise<Response> {
  try {
    const parsedBody = await parseBody(request)
    if (parsedBody instanceof Response) {
      return parsedBody
    }

    const parsed = parseContactFormData(parsedBody)
    const validation = validateContactForm(parsed)

    if (!validation.ok) {
      return jsonResponse({ ok: false, error: validation.error }, validation.status)
    }

    // Honeypot triggered: fake success without sending email.
    if (validation.isSpam) {
      return jsonResponse({ ok: true }, 200)
    }

    const data = validation.data
    const clientIp = getClientIp(request)

    if (!checkRateLimit(clientIp)) {
      return jsonResponse(
        { ok: false, error: 'Demasiados intentos. Probá de nuevo en un minuto.' },
        429
      )
    }

    const fingerprint = buildSubmissionFingerprint(data)
    if (!checkDuplicateSubmission(fingerprint)) {
      return jsonResponse({ ok: true }, 200)
    }

    const { apiKey, toEmail, fromEmail } = getContactEnv()

    if (!apiKey || !toEmail || !fromEmail) {
      console.error('[contact] Missing required environment variables')
      return jsonResponse(
        { ok: false, error: 'El servicio de contacto no está configurado.' },
        503
      )
    }

    const resend = new Resend(apiKey)
    const sendEmail = async (email: OutboundEmail) => {
      const { error } = await resend.emails.send({
        from: email.from,
        to: email.to,
        ...(email.replyTo ? { replyTo: email.replyTo } : {}),
        subject: email.subject,
        text: email.text,
        ...(email.html ? { html: email.html } : {}),
      })
      return { error: error ?? null }
    }

    const delivery = await sendContactEmails(
      data,
      { fromEmail, ownerEmail: toEmail },
      sendEmail
    )

    if (!delivery.ok) {
      console.error('[contact] Owner notification failed')
      return jsonResponse(
        { ok: false, error: 'No se pudo enviar el mensaje. Intentá de nuevo.' },
        502
      )
    }

    if (delivery.confirmationFailed) {
      console.error('[contact] Visitor confirmation failed after owner notification')
    }

    // Primary reception succeeded even if confirmation failed.
    return jsonResponse({ ok: true }, 200)
  } catch (error: unknown) {
    logSafeError('Unexpected error handling submission', error)
    return jsonResponse(
      { ok: false, error: 'Hubo un error al enviar el mensaje. Intentá de nuevo.' },
      500
    )
  }
}

export function GET(): Response {
  return jsonResponse({ ok: false, error: 'Método no permitido.' }, 405)
}

export function PUT(): Response {
  return jsonResponse({ ok: false, error: 'Método no permitido.' }, 405)
}

export function PATCH(): Response {
  return jsonResponse({ ok: false, error: 'Método no permitido.' }, 405)
}

export function DELETE(): Response {
  return jsonResponse({ ok: false, error: 'Método no permitido.' }, 405)
}
