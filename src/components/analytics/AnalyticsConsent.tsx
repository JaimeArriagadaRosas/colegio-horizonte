import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const STORAGE_KEY = 'colegio-horizonte-analytics-consent'
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()

type ConsentState = 'accepted' | 'declined' | 'unknown'

type AnalyticsWindow = Window & {
  dataLayer?: unknown[]
  gtag?: (...args: unknown[]) => void
}

function readConsent(): ConsentState {
  if (typeof window === 'undefined') return 'unknown'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'accepted' || stored === 'declined' ? stored : 'unknown'
}

function initializeAnalytics() {
  if (!measurementId || typeof window === 'undefined') return

  const analyticsWindow = window as AnalyticsWindow
  analyticsWindow.dataLayer = analyticsWindow.dataLayer ?? []
  analyticsWindow.gtag = (...args: unknown[]) => {
    analyticsWindow.dataLayer?.push(args)
  }

  if (!document.querySelector(`script[data-ga4="${measurementId}"]`)) {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
    script.dataset.ga4 = measurementId
    document.head.appendChild(script)
  }

  analyticsWindow.gtag('js', new Date())
  analyticsWindow.gtag('config', measurementId, { send_page_view: false })
}

function trackPageView(path: string) {
  if (!measurementId || typeof window === 'undefined') return
  const analyticsWindow = window as AnalyticsWindow
  analyticsWindow.gtag?.('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

export function AnalyticsConsent() {
  const location = useLocation()
  const [consent, setConsent] = useState<ConsentState>(() => readConsent())

  useEffect(() => {
    if (consent !== 'accepted' || !measurementId) return
    initializeAnalytics()
    trackPageView(`${location.pathname}${location.search}`)
  }, [consent, location.pathname, location.search])

  if (!measurementId || consent !== 'unknown') return null

  const saveConsent = (value: Exclude<ConsentState, 'unknown'>) => {
    window.localStorage.setItem(STORAGE_KEY, value)
    setConsent(value)
  }

  return (
    <aside
      aria-label="Preferencias de analítica"
      className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-xl"
    >
      <p className="font-heading text-lg font-semibold text-primary-950">Analítica opcional</p>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        Este sitio de demostración puede usar Google Analytics para medir navegación y rendimiento.
        La medición solo se activa si la aceptas. Puedes continuar usando el sitio sin habilitarla.
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => saveConsent('accepted')}
          className="rounded-lg bg-primary-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Aceptar analítica
        </button>
        <button
          type="button"
          onClick={() => saveConsent('declined')}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Rechazar
        </button>
      </div>
    </aside>
  )
}
