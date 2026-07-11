import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import { newsData } from '@/data/content'
import { Link } from 'react-router-dom'

const categories = ['Todos', ...new Set(newsData.map((n) => n.category))]

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const filteredNews =
    selectedCategory === 'Todos'
      ? newsData
      : newsData.filter((news) => news.category === selectedCategory)

  const featuredNews = newsData.find((n) => n.featured)

  return (
    <div>
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Actualidad
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-950 mb-6">
              Noticias y Eventos
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Mantente al día con las últimas novedades, logros y eventos de nuestra comunidad
              educativa.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {featuredNews && selectedCategory === 'Todos' && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl overflow-hidden shadow-lg"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Tag className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-white/80 text-sm font-medium uppercase tracking-wider">
                      Noticia Destacada
                    </p>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                      <Tag className="w-3 h-3" />
                      {featuredNews.category}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredNews.date).toLocaleDateString('es-CL', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-950 mb-4">
                    {featuredNews.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredNews.content}
                  </p>
                  <Link
                    to={`/noticias`}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews
              .filter((n) => !n.featured || selectedCategory !== 'Todos')
              .map((news, index) => (
                <motion.article
                  key={news.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group overflow-hidden p-0"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Tag className="w-12 h-12 text-primary-300" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 rounded-full text-xs font-medium">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      {new Date(news.date).toLocaleDateString('es-CL', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <button className="inline-flex items-center gap-2 text-primary-600 font-medium text-sm group-hover:gap-3 transition-all">
                      Leer más
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
