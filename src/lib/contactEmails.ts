import type { ContactFormPayload } from './contactForm.js'

export interface OutboundEmail {
  from: string
  to: string[]
  replyTo?: string
  subject: string
  text: string
  html?: string
}

export type EmailSender = (email: OutboundEmail) => Promise<{ error: unknown | null }>

export interface ContactEmailConfig {
  fromEmail: string
  ownerEmail: string
}

export interface SendContactEmailsResult {
  ok: boolean
  ownerSent: boolean
  confirmationSent: boolean
  confirmationFailed: boolean
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export function buildOwnerNotificationEmail(
  data: ContactFormPayload,
  config: ContactEmailConfig
): OutboundEmail {
  const text = [
    'Nuevo mensaje desde el formulario de contacto.',
    '',
    `Nombre: ${data.name}`,
    `Email: ${data.email}`,
    '',
    'Mensaje:',
    data.message,
  ].join('\n')

  const html = `
<!DOCTYPE html>
<html lang="es">
  <body style="margin:0;padding:24px;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#18181b;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e4e4e7;border-radius:12px;">
      <tr>
        <td style="padding:24px;">
          <h1 style="margin:0 0 16px;font-size:20px;line-height:1.4;">Nueva consulta desde el portfolio</h1>
          <p style="margin:0 0 8px;"><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
          <p style="margin:0 0 16px;"><strong>Email:</strong> ${escapeHtml(data.email)}</p>
          <p style="margin:0 0 8px;"><strong>Mensaje:</strong></p>
          <p style="margin:0;white-space:pre-wrap;line-height:1.5;">${escapeHtml(data.message)}</p>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim()

  return {
    from: config.fromEmail,
    to: [config.ownerEmail],
    replyTo: data.email,
    subject: `Nuevo contacto desde el portfolio — ${data.name}`,
    text,
    html,
  }
}

export function buildVisitorConfirmationEmail(
  data: ContactFormPayload,
  config: ContactEmailConfig
): OutboundEmail {
  const text = [
    `Hola, ${data.name}:`,
    '',
    '¡Gracias por contactarme!',
    '',
    'Recibí correctamente tu mensaje y me pondré en contacto con vos lo antes posible.',
    '',
    'Aprecio tu interés en trabajar conmigo.',
    '',
    '¡Gracias por escribirme!',
    '',
    'Pablo MG Dev',
    'Software Developer | Web & AI',
    'https://pablomgdev.xyz',
  ].join('\n')

  const html = `
<!DOCTYPE html>
<html lang="es">
  <body style="margin:0;padding:24px;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#18181b;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e4e4e7;border-radius:12px;">
      <tr>
        <td style="padding:24px;">
          <p style="margin:0 0 16px;font-size:16px;line-height:1.5;">Hola, ${escapeHtml(data.name)}:</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.5;">¡Gracias por contactarme!</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.5;">
            Recibí correctamente tu mensaje y me pondré en contacto con vos lo antes posible.
          </p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.5;">Aprecio tu interés en trabajar conmigo.</p>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.5;">¡Gracias por escribirme!</p>
          <p style="margin:0;font-size:16px;line-height:1.5;">
            <strong>Pablo MG Dev</strong><br />
            Software Developer | Web &amp; AI<br />
            <a href="https://pablomgdev.xyz" style="color:#0f766e;text-decoration:none;">https://pablomgdev.xyz</a>
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim()

  // Confirmation is always addressed only to the validated visitor email.
  return {
    from: config.fromEmail,
    to: [data.email],
    replyTo: config.fromEmail,
    subject: 'Recibimos tu mensaje | Pablo M.G. Dev',
    text,
    html,
  }
}

/**
 * Sends owner notification first. Confirmation runs only after owner success.
 * Confirmation failure does not fail the overall submission.
 */
export async function sendContactEmails(
  data: ContactFormPayload,
  config: ContactEmailConfig,
  sendEmail: EmailSender
): Promise<SendContactEmailsResult> {
  const ownerEmail = buildOwnerNotificationEmail(data, config)
  const ownerResult = await sendEmail(ownerEmail)

  if (ownerResult.error) {
    return {
      ok: false,
      ownerSent: false,
      confirmationSent: false,
      confirmationFailed: false,
    }
  }

  const confirmationEmail = buildVisitorConfirmationEmail(data, config)

  // Hard guard: never send confirmation to anyone except the validated visitor.
  if (
    confirmationEmail.to.length !== 1 ||
    confirmationEmail.to[0] !== data.email ||
    confirmationEmail.from !== config.fromEmail
  ) {
    return {
      ok: true,
      ownerSent: true,
      confirmationSent: false,
      confirmationFailed: true,
    }
  }

  const confirmationResult = await sendEmail(confirmationEmail)
  if (confirmationResult.error) {
    return {
      ok: true,
      ownerSent: true,
      confirmationSent: false,
      confirmationFailed: true,
    }
  }

  return {
    ok: true,
    ownerSent: true,
    confirmationSent: true,
    confirmationFailed: false,
  }
}
