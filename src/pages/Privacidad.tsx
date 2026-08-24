import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { SEO } from '@/components/layout/SEO'

export default function Privacidad() {
  return (
    <>
      <SEO
        title="Colegio Horizonte | Política de Privacidad"
        description="Privacidad y analítica del sitio demostrativo Colegio Horizonte."
        pathname="/privacidad"
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
                <Shield className="h-4 w-4" />
                Protección de datos
              </span>
              <h1 className="mb-6 font-heading text-3xl font-bold text-primary-950 md:text-5xl">
                Política de Privacidad
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
                  Sitio demostrativo
                </h2>
                <p>
                  Colegio Horizonte es una institución ficticia creada para un proyecto educativo y de
                  portafolio. Los nombres, direcciones, correos, personas y datos institucionales mostrados
                  en la interfaz son contenido de demostración y no identifican a un colegio real.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl font-semibold text-primary-900">
                  1. Alcance de esta política
                </h2>
                <p>
                  Esta página describe el comportamiento del sitio de demostración. No debe interpretarse
                  como la política de privacidad de una institución educacional real ni como asesoría legal
                  para implementar una política propia.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl font-semibold text-primary-900">
                  2. Formularios y datos ficticios
                </h2>
                <p>
                  El proyecto no incorpora una base de datos institucional para almacenar postulaciones o
                  expedientes escolares. Los formularios visibles forman parte de la demostración de interfaz
                  y deben evaluarse según el mecanismo concreto configurado en cada despliegue.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl font-semibold text-primary-900">
                  3. Analítica opcional
                </h2>
                <p>
                  El proyecto puede configurarse con Google Analytics 4 mediante una variable de entorno.
                  Cuando existe esa configuración, el script de analítica solo se carga después de que la
                  persona visitante elige expresamente aceptar la medición. Rechazarla no impide utilizar el
                  resto del sitio.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl font-semibold text-primary-900">
                  4. Preferencia guardada en el navegador
                </h2>
                <p>
                  La decisión de aceptar o rechazar analítica se guarda localmente en el navegador para no
                  solicitar la misma elección en cada navegación. Esa preferencia puede eliminarse borrando
                  los datos locales del sitio desde el navegador.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl font-semibold text-primary-900">
                  5. Search Console
                </h2>
                <p>
                  Google Search Console puede utilizarse para verificar la propiedad técnica del sitio y
                  observar su indexación en Google. La verificación se configura mediante variables de
                  entorno y no requiere que el visitante entregue información mediante la interfaz.
                </p>
              </div>

              <div>
                <h2 className="mb-3 font-heading text-2xl font-semibold text-primary-900">
                  6. Marco normativo de referencia
                </h2>
                <p>
                  A la fecha de esta actualización, en Chile continúa vigente la Ley N.º 19.628 sobre
                  protección de la vida privada. La reforma introducida por la Ley N.º 21.719 tiene entrada
                  en vigencia diferida para el 1 de diciembre de 2026. Un despliegue real que trate datos
                  personales debe revisar sus obligaciones aplicables y mantener esta información actualizada.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
