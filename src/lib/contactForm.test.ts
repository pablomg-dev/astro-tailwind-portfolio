import { describe, expect, it } from 'vitest'
import {
  buildSubmissionFingerprint,
  checkDuplicateSubmission,
  checkRateLimit,
  isValidEmail,
  sanitizeMultiline,
  sanitizeText,
  validateContactForm,
} from './contactForm'

describe('sanitizeText', () => {
  it('trims and collapses whitespace', () => {
    expect(sanitizeText('  Hola   mundo  ')).toBe('Hola mundo')
  })

  it('removes control characters', () => {
    expect(sanitizeText('Hola\u0000mundo')).toBe('Holamundo')
  })
})

describe('sanitizeMultiline', () => {
  it('preserves paragraph breaks while normalizing excess newlines', () => {
    expect(sanitizeMultiline('Linea 1\n\n\n\nLinea 2')).toBe('Linea 1\n\nLinea 2')
  })
})

describe('isValidEmail', () => {
  it('accepts valid emails', () => {
    expect(isValidEmail('user@example.com')).toBe(true)
  })

  it('rejects invalid emails', () => {
    expect(isValidEmail('not-an-email')).toBe(false)
    expect(isValidEmail('')).toBe(false)
  })
})

describe('validateContactForm', () => {
  const valid = {
    name: 'Pablo',
    email: 'user@example.com',
    message: 'Quiero una web profesional para mi proyecto.',
    honeypot: '',
  }

  it('accepts a valid payload', () => {
    const result = validateContactForm(valid)
    expect(result.ok).toBe(true)
    if (result.ok && !result.isSpam) {
      expect(result.data.email).toBe('user@example.com')
    }
  })

  it('marks honeypot submissions as spam without failing', () => {
    const result = validateContactForm({ ...valid, honeypot: 'bot' })
    expect(result.ok).toBe(true)
    if (result.ok) {
      expect(result.isSpam).toBe(true)
    }
  })

  it('rejects missing fields', () => {
    const result = validateContactForm({ ...valid, name: '' })
    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.status).toBe(400)
    }
  })

  it('rejects invalid email', () => {
    const result = validateContactForm({ ...valid, email: 'bad' })
    expect(result.ok).toBe(false)
  })

  it('rejects short messages', () => {
    const result = validateContactForm({ ...valid, message: 'Hola' })
    expect(result.ok).toBe(false)
  })
})

describe('anti-spam helpers', () => {
  it('rate-limits repeated keys', () => {
    const key = `test-rate-${Date.now()}`
    expect(checkRateLimit(key)).toBe(true)
    expect(checkRateLimit(key)).toBe(false)
  })

  it('deduplicates identical submissions', () => {
    const fingerprint = buildSubmissionFingerprint({
      name: 'Pablo',
      email: `dupe-${Date.now()}@example.com`,
      message: 'Mensaje de prueba suficientemente largo.',
    })
    expect(checkDuplicateSubmission(fingerprint)).toBe(true)
    expect(checkDuplicateSubmission(fingerprint)).toBe(false)
  })
})
