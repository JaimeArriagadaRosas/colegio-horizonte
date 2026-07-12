type ContactPayload = {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  company?: string
}

type ContactResult =
  | { success: true }
  | { success: false; code: 'network' | 'client' | 'server'; message: string }

const MIN_ELAPSED_MS = 3000

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const startTime = Number(sessionStorage.getItem('contact_start_time') ?? Date.now())
  const elapsed = Date.now() - startTime

  if (elapsed < MIN_ELAPSED_MS) {
    return { success: false, code: 'client', message: 'Por favor espera un momento antes de enviar.' }
  }

  const endpoint = (import.meta as any).env?.VITE_CONTACT_ENDPOINT as string | undefined

  if (!endpoint) {
    const subject = encodeURIComponent(payload.subject === 'otro' ? 'Contacto desde sitio web' : payload.subject)
    const body = encodeURIComponent(
      `Nombre: ${payload.name}\nCorreo: ${payload.email}\nTeléfono: ${payload.phone}\nMensaje:\n${payload.message}`,
    )
    window.location.href = `mailto:info@colegiohorizonte.cl?subject=${subject}&body=${body}`
    return { success: true }
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      let text = ''
      try {
        text = await res.text()
      } catch {
        text = String(res.status)
      }
      return { success: false, code: 'server', message: text || `Error ${res.status}` }
    }

    return { success: true }
  } catch {
    return { success: false, code: 'network', message: 'Error de red. Intenta más tarde.' }
  }
}
