import { motion } from 'framer-motion'
import { FileText, Download, Calendar } from 'lucide-react'
import { documentsData, type DocumentCategory } from '@/data/content'
import { downloadDocument } from '@/utils/document'
import { SEO } from '@/components/layout/SEO'
import { Link } from 'react-router-dom'

const categoryStyles: Record<DocumentCategory, string> = {
  Admisión: 'bg-primary-100 text-primary-700',
  Convivencia: 'bg-accent-100 text-accent-700',
  Académico: 'bg-green-50 text-green-700',
  Familia: 'bg-amber-50 text-amber-700',
}

export default function Documentos() {
  return (
    <>
      <SEO
        title="Colegio Horizonte | Documentos"
        description="Descarga reglamentos, uniforme, lista de útiles, formulario de postulación y autorización de imagen."
        pathname="/documentos"
      />
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
                Recursos para familias
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-950 mb-6">
                Documentos
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Descarga los documentos institucionales de uso frecuente para apoderados y
                familias.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documentsData.map((doc, index) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="card flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-2 ${
                          categoryStyles[doc.category]
                        }`}
                      >
                        {doc.category}
                      </span>
                      <h3 className="text-lg font-heading font-semibold text-primary-900 leading-snug">
                        {doc.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {doc.description}
                  </p>

                  <div className="flex items-center justify-between gap-3">
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      Actualizado: {new Date(doc.updated).toLocaleDateString('es-CL')}
                    </span>
                    <button
                      onClick={() =>
                        downloadDocument(`${doc.id}.pdf`, doc.title, doc.content)
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Descargar
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-12 max-w-2xl mx-auto">
              ¿Necesitas otro documento? Escríbenos a través del{' '}
              <Link to="/contacto" className="text-primary-600 font-medium hover:underline">
                formulario de contacto
              </Link>{' '}
              y con gusto te lo enviaremos.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
