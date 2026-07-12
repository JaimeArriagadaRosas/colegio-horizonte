import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { Calendar, Tag, ArrowLeft, ChevronRight } from 'lucide-react'
import { newsData } from '@/data/content'
import { SEO } from '@/components/layout/SEO'

export default function NewsDetail() {
  const { id } = useParams()
  const news = newsData.find((n) => String(n.id) === id)

  if (!news) {
    return (
      <>
        <SEO title="Colegio Horizonte | Noticia no encontrada" pathname="/noticias" />
        <div className="min-h-[60vh] flex items-center justify-center p-6">
          <div className="text-center">
            <h1 className="text-3xl font-heading font-bold text-primary-900 mb-4">
              Noticia no encontrada
            </h1>
            <Link
              to="/noticias"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver a Noticias
            </Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <SEO
        title={`Colegio Horizonte | ${news.title}`}
        description={news.excerpt}
        pathname={`/noticias/${news.id}`}
      />
      <div>
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <Link
                to="/noticias"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:text-primary-700 mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver a Noticias
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                  <Tag className="w-3 h-3" />
                  {news.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  {new Date(news.date).toLocaleDateString('es-CL', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-950 mb-6 leading-tight">
                {news.title}
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl overflow-hidden mb-10 relative">
                <img
                  src={news.image}
                  alt={news.title}
                  loading="lazy"
                  onError={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Tag className="w-16 h-16 text-white/80" />
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                {news.excerpt}
              </p>
              <p className="text-gray-700 leading-relaxed mb-10">{news.content}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admision"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200"
                >
                  Conoce nuestra admisión
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl border-2 border-primary-600 hover:bg-primary-50 transition-all duration-200"
                >
                  Contactar al colegio
                </Link>
              </div>
            </motion.article>
          </div>
        </section>
      </div>
    </>
  )
}
