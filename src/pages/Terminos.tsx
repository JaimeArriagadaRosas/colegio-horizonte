import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { SEO } from '@/components/layout/SEO'

export default function Terminos() {
  return (
    <>
      <SEO
        title="Colegio Horizonte | Términos de Uso"
        description="Condiciones de uso del sitio web del Colegio Horizonte."
        pathname="/terminos"
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
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                <FileText className="w-4 h-4" />
                Condiciones
              </span>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-950 mb-6">
                Términos de Uso
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Última actualización: marzo de 2025.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl space-y-8 text-gray-700 leading-relaxed"
            >
              <div>
                <h2 className="text-2xl font-heading font-semibold text-primary-900 mb-3">
                  1. Naturaleza del sitio
                </h2>
                <p>
                  Este sitio web es una plataforma de información institucional del Colegio
                  Horizonte. El contenido es de carácter demostrativo y la institución, sus
                  datos y resultados son ficticios a efectos de esta versión.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-primary-900 mb-3">
                  2. Uso adecuado
                </h2>
                <p>
                  El usuario se compromete a utilizar el sitio de forma lícita, sin intentar
                  vulnerar su seguridad ni enviar contenido ofensivo a través de los
                  formularios de contacto.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-primary-900 mb-3">
                  3. Propiedad intelectual
                </h2>
                <p>
                  Los textos, logotipos y diseño del sitio pertenecen al Colegio Horizonte y
                  no pueden ser reproducidos sin autorización previa.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-primary-900 mb-3">
                  4. Limitación de responsabilidad
                </h2>
                <p>
                  El Colegio no se hace responsable por errores eventuales en la información
                  publicada ni por la interrupción del servicio por causas ajenas a su
                  control.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
