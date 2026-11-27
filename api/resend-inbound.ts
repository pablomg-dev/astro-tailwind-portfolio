import { Resend } from 'resend'

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
}

interface SvixHeaders {
  id: string
  timestamp: string
  signature: string
}

interface InboundEnv {
  apiKey: string
  webhookSecret: string
  toEmail: string
  fromEmail: string
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

function getInboundEnv(): InboundEnv | null {
  const apiKey = readEnv(process.env.RESEND_API_KEY)
  const webhookSecret = readEnv(process.env.RESEND_WEBHOOK_SECRET)
  const toEmail = readEnv(process.env.CONTACT_TO_EMAIL)
  const fromEmail = readEnv(process.env.CONTACT_FROM_EMAIL)

  if (!apiKey || !webhookSecret || !toEmail || !fromEmail) {
    return null
  }

  return { apiKey, webhookSecret, toEmail, fromEmail }
}

function readSvixHeaders(headers: Headers): SvixHeaders | null {
  const id = readEnv(headers.get('svix-id') ?? undefined)
  const timestamp = readEnv(headers.get('svix-timestamp') ?? undefined)
  const signature = readEnv(headers.get('svix-signature') ?? undefined)

  if (!id || !timestamp || !signature) {
    return null
  }

  return { id, timestamp, signature }
}

function logSafeError(scope: string, error: unknown): void {
  if (error instanceof Error) {
    console.error(`[resend-inbound] ${scope}`, {
      name: error.name,
      message: error.message,
    })
    return
  }

  console.error(`[resend-inbound] ${scope}`)
}

export async function POST(request: Request): Promise<Response> {
  try {
    const env = getInboundEnv()
    if (!env) {
      console.error('[resend-inbound] Faltan variables de entorno requeridas')
      return jsonResponse({ ok: false, error: 'Servicio de recepción no configurado.' }, 503)
    }

    const svixHeaders = readSvixHeaders(request.headers)
    if (!svixHeaders) {
      return jsonResponse({ ok: false, error: 'Faltan cabeceras de firma.' }, 400)
    }

    // Se lee el cuerpo crudo para validar la firma Svix sin alteraciones.
    const rawBody = await request.text()
    const resend = new Resend(env.apiKey)

    let event: ReturnType<Resend['webhooks']['verify']>
    try {
      event = resend.webhooks.verify({
        payload: rawBody,
        headers: svixHeaders,
        webhookSecret: env.webhookSecret,
      })
    } catch (error: unknown) {
      logSafeError('Firma de webhook inválida', error)
      return jsonResponse({ ok: false, error: 'Firma de webhook inválida.' }, 400)
    }

    if (event.type !== 'email.received') {
      return jsonResponse({ ok: true, ignored: true }, 200)
    }

    const { data, error } = await resend.emails.receiving.forward({
      emailId: event.data.email_id,
      to: [env.toEmail],
      from: env.fromEmail,
      passthrough: true,
    })

    if (error) {
      logSafeError('Error al reenviar correo entrante', error)
      return jsonResponse({ ok: false, error: 'No se pudo reenviar el correo.' }, 502)
    }

    return jsonResponse({ ok: true, id: data?.id ?? null }, 200)
  } catch (error: unknown) {
    logSafeError('Error inesperado procesando webhook', error)
    return jsonResponse({ ok: false, error: 'Error interno procesando el webhook.' }, 500)
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
