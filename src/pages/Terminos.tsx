import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { SEO } from '@/components/layout/SEO'

export default function Terminos() {
  return (
    <>
      <SEO
        title="Colegio Horizonte | Términos de Uso"
        description="Condiciones de uso del sitio demostrativo Colegio Horizonte."
        pathname="/terminos"
      />
      <div>
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 md:py-28">
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700">
                <FileText className="h-4 w-4" />
                Condiciones
              </span>
              <h1 className="mb-6 font-heading text-3xl font-bold text-primary-950 md:text-5xl">
                Términos de Uso
              </h1>
              <p className="text-lg leading-relaxed text-gray-600">
                Última actualización: agosto de 2026.
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
              className="max-w-3xl space-y-8 leading-relaxed text-gray-700"
            >
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <h2 className="mb-2 font-heading text-xl font-semibold text-amber-950">
                  Proyecto ficticio y educativo
                </h2>
                <p>
                  Colegio Horizonte no representa una institución educacional real. El sitio se publica como
                  ejercicio de ingeniería web, demostración técnica y material de portafolio.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl font-semibold text-primary-900">
                  1. Naturaleza del contenido
                </h2>
                <p>
                  Los nombres, personas, cifras, direcciones, noticias, documentos, fechas y demás datos
                  institucionales visibles son contenido ficticio de demostración. No deben utilizarse para
                  tomar decisiones académicas, legales, administrativas o financieras.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl font-semibold text-primary-900">
                  2. Uso del sitio desplegado
                </h2>
                <p>
                  El sitio puede ser navegado para evaluar su diseño, accesibilidad, comportamiento y
                  características técnicas. El usuario no debe intentar vulnerar su seguridad, interferir
                  con su disponibilidad ni utilizar formularios o integraciones para enviar contenido abusivo.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl font-semibold text-primary-900">
                  3. Código fuente y propiedad intelectual
                </h2>
                <p>
                  La disponibilidad pública del repositorio no convierte el proyecto en software de código
                  abierto. El código, documentación, diseño y SVG originales del proyecto se rigen por la
                  licencia incluida en el repositorio. Las dependencias y recursos de terceros mantienen sus
                  propias licencias y condiciones.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl font-semibold text-primary-900">
                  4. Disponibilidad y exactitud técnica
                </h2>
                <p>
                  El proyecto se encuentra en evolución y puede cambiar, contener errores o quedar temporalmente
                  indisponible durante pruebas y despliegues. Los resultados de Lighthouse, Search Console,
                  Analytics u otras herramientas deben entenderse como mediciones del estado concreto del sitio
                  en el momento de la prueba.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl font-semibold text-primary-900">
                  5. Integraciones externas
                </h2>
                <p>
                  Algunas funciones opcionales pueden depender de servicios de terceros, como Vercel, Google
                  Search Console o Google Analytics. Su disponibilidad y condiciones también dependen de los
                  respectivos proveedores.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
