import { Routes, Route } from 'react-router-dom'
import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Helmet } from 'react-helmet-async'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Academic from '@/pages/Academic'
import Admission from '@/pages/Admission'
import News from '@/pages/News'
import Gallery from '@/pages/Gallery'
import FAQ from '@/pages/FAQ'
import Contact from '@/pages/Contact'

export default function AppRouter() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Helmet>
        <html lang="es" />
        <link rel="canonical" href="https://colegiohorizonte.cl" />
      </Helmet>
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/oferta-academica" element={<Academic />} />
          <Route path="/admision" element={<Admission />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/preguntas-frecuentes" element={<FAQ />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
