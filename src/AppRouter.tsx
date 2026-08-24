import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { HelmetProvider } from 'react-helmet-async'
import { ErrorBoundary } from '@/components/ErrorBoundary'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Academic = lazy(() => import('@/pages/Academic'))
const Admission = lazy(() => import('@/pages/Admission'))
const News = lazy(() => import('@/pages/News'))
const NewsDetail = lazy(() => import('@/pages/NewsDetail'))
const Gallery = lazy(() => import('@/pages/Gallery'))
const FAQ = lazy(() => import('@/pages/FAQ'))
const Contact = lazy(() => import('@/pages/Contact'))
const Calendario = lazy(() => import('@/pages/Calendario'))
const Documentos = lazy(() => import('@/pages/Documentos'))
const Privacidad = lazy(() => import('@/pages/Privacidad'))
const Terminos = lazy(() => import('@/pages/Terminos'))
const NotFound = lazy(() => import('@/pages/NotFound'))

const PageFallback = () => (
  <div className="flex min-h-screen items-center justify-center" role="status" aria-label="Cargando página">
    <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
  </div>
)

export default function AppRouter() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <HelmetProvider>
        <Navbar />
        <main id="main-content" className="flex-1 min-h-screen">
          <ErrorBoundary>
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<About />} />
                <Route path="/oferta-academica" element={<Academic />} />
                <Route path="/admision" element={<Admission />} />
                <Route path="/noticias" element={<News />} />
                <Route path="/noticias/:id" element={<NewsDetail />} />
                <Route path="/calendario" element={<Calendario />} />
                <Route path="/documentos" element={<Documentos />} />
                <Route path="/privacidad" element={<Privacidad />} />
                <Route path="/terminos" element={<Terminos />} />
                <Route path="/galeria" element={<Gallery />} />
                <Route path="/preguntas-frecuentes" element={<FAQ />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </HelmetProvider>
    </div>
  )
}
