import { motion } from 'framer-motion'
import { Shield } from 'lucide-react'
import { SEO } from '@/components/layout/SEO'

export default function Privacidad() {
  return (
    <>
      <SEO
        title="Colegio Horizonte | Política de Privacidad"
        description="Cómo protegemos los datos personales y de menores del Colegio Horizonte."
        pathname="/privacidad"
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
                <Shield className="w-4 h-4" />
                Protección de datos
              </span>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary-950 mb-6">
                Política de Privacidad
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
                  1. Responsable del tratamiento
                </h2>
                <p>
                  El Colegio Horizonte (en adelante, "el Colegio"), con domicilio en Av.
                  Providencia 1234, Santiago, Chile, es responsable de los datos personales
                  que usted nos entrega a través de este sitio web.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-primary-900 mb-3">
                  2. Datos de menores (Ley 19.628)
                </h2>
                <p>
                  Cuando el formulario de contacto o de admisión incluye datos de niños, niñas
                  o adolescentes, estos son tratados conforme a la Ley 19.628 sobre Protección
                  de la Vida Privada y únicamente con la finalidad de gestionar el proceso de
                  admisión y la comunicación con su apoderado. No solicitamos más datos de los
                  necesarios.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-primary-900 mb-3">
                  3. Uso de la información
                </h2>
                <p>
                  La información que usted envía se utiliza para responder sus consultas,
                  agendar visitas y comunicar novedades del colegio. En este sitio de
                  demostración, el mensaje se abre en el cliente de correo del apoderado y no
                  se almacena en servidores del Colegio.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-primary-900 mb-3">
                  4. Imágenes y consentimiento
                </h2>
                <p>
                  La publicación de fotografías de menores en el sitio web, redes sociales o
                  boletines requiere la autorización escrita de sus apoderados. Puede
                  descargar y firmar la autorización en la sección de Documentos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-semibold text-primary-900 mb-3">
                  5. Sus derechos
                </h2>
                <p>
                  Usted puede solicitar en cualquier momento el acceso, rectificación o
                  eliminación de los datos proporcionados escribiendo a
                  info@colegiohorizonte.cl.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
