import { describe, expect, it, vi } from 'vitest'
import {
  buildOwnerNotificationEmail,
  buildVisitorConfirmationEmail,
  sendContactEmails,
  type EmailSender,
  type OutboundEmail,
} from './contactEmails'

const payload = {
  name: 'Ana Pérez',
  email: 'ana@example.com',
  message: 'Quiero una web profesional para mi consultorio.',
}

const config = {
  fromEmail: 'Pablo MG Dev <contacto@pablomgdev.xyz>',
  ownerEmail: 'pablomg.developer@gmail.com',
}

describe('buildOwnerNotificationEmail', () => {
  it('targets the owner inbox and keeps visitor reply-to', () => {
    const email = buildOwnerNotificationEmail(payload, config)

    expect(email.from).toBe(config.fromEmail)
    expect(email.to).toEqual([config.ownerEmail])
    expect(email.replyTo).toBe(payload.email)
    expect(email.subject).toContain('Nuevo contacto desde el portfolio')
    expect(email.text).toContain(payload.message)
    expect(email.text).toContain(payload.email)
  })
})

describe('buildVisitorConfirmationEmail', () => {
  it('targets only the validated visitor email and omits the original message', () => {
    const email = buildVisitorConfirmationEmail(payload, config)

    expect(email.from).toBe(config.fromEmail)
    expect(email.to).toEqual([payload.email])
    expect(email.subject).toBe('Recibimos tu mensaje | Pablo M.G. Dev')
    expect(email.text).toContain(`Hola, ${payload.name}:`)
    expect(email.text).not.toContain(payload.message)
    expect(email.replyTo).toBe(config.fromEmail)
  })

  it('uses the Pablo MG Dev brand signature', () => {
    const email = buildVisitorConfirmationEmail(payload, config)

    expect(email.from).toContain('contacto@pablomgdev.xyz')
    expect(email.text).toContain('Pablo MG Dev')
    expect(email.text).toContain('Software Developer | Web & AI')
    expect(email.text).toContain('https://pablomgdev.xyz')
    expect(email.html).toContain('Pablo MG Dev')
    expect(email.html).toContain('Software Developer | Web &amp; AI')
    expect(email.html).toContain('https://pablomgdev.xyz')
    expect(email.text).toContain(`Hola, ${payload.name}:`)
    expect(email.text).not.toContain(payload.message)
    expect(email.html).not.toContain(payload.message)
  })
})

describe('sendContactEmails', () => {
  it('sends owner notification then visitor confirmation', async () => {
    const sent: OutboundEmail[] = []
    const sendEmail: EmailSender = async email => {
      sent.push(email)
      return { error: null }
    }

    const result = await sendContactEmails(payload, config, sendEmail)

    expect(result).toEqual({
      ok: true,
      ownerSent: true,
      confirmationSent: true,
      confirmationFailed: false,
    })
    expect(sent).toHaveLength(2)
    expect(sent[0]?.to).toEqual([config.ownerEmail])
    expect(sent[1]?.to).toEqual([payload.email])
    expect(sent[1]?.from).toBe(config.fromEmail)
  })

  it('does not send confirmation when owner notification fails', async () => {
    const sendEmail = vi
      .fn<EmailSender>()
      .mockResolvedValueOnce({ error: { message: 'owner failed' } })

    const result = await sendContactEmails(payload, config, sendEmail)

    expect(result.ok).toBe(false)
    expect(result.ownerSent).toBe(false)
    expect(result.confirmationSent).toBe(false)
    expect(sendEmail).toHaveBeenCalledTimes(1)
  })

  it('keeps owner success when confirmation fails', async () => {
    const sendEmail = vi
      .fn<EmailSender>()
      .mockResolvedValueOnce({ error: null })
      .mockResolvedValueOnce({ error: { message: 'confirmation failed' } })

    const result = await sendContactEmails(payload, config, sendEmail)

    expect(result).toEqual({
      ok: true,
      ownerSent: true,
      confirmationSent: false,
      confirmationFailed: true,
    })
    expect(sendEmail).toHaveBeenCalledTimes(2)
  })

  it('never addresses confirmation to a third party', async () => {
    const sent: OutboundEmail[] = []
    const sendEmail: EmailSender = async email => {
      sent.push(email)
      return { error: null }
    }

    await sendContactEmails(payload, config, sendEmail)

    expect(sent[1]?.to).toEqual([payload.email])
    expect(sent[1]?.to).not.toContain(config.ownerEmail)
    expect(sent[1]?.to).not.toEqual(['attacker@example.com'])
  })
})
