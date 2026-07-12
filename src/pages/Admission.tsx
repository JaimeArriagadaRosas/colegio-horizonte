import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Calendar, ChevronRight } from 'lucide-react'
import { admissionData } from '@/data/content'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/layout/SEO'

export default function Admission() {
  const [selectedPlan, setSelectedPlan] = useState(0)

  return (
    <>
      <SEO title="Colegio Horizonte | Proceso de Admisión" description="Comienza tu postulación 2025. Conoce los pasos, requisitos y planes de financiamiento." pathname="/admision" />
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
              Admisiones 2025
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-950 mb-6">
              Proceso de Admisión
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Forma parte de nuestra comunidad educativa. Sigue estos sencillos pasos para
              completar tu postulación.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {admissionData.steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {step.step}
                    </div>
                    {index < admissionData.steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-primary-200 -translate-y-1/2" />
                    )}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-950 mb-6">
                Documentos Requeridos
              </h2>
              <p className="text-gray-600 mb-8">
                Prepara la siguiente documentación para agilizar tu proceso de postulación.
              </p>
              <div className="space-y-4">
                {admissionData.requirements.map((req, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-950 mb-6">
                Fechas Importantes
              </h2>
              <p className="text-gray-600 mb-8">
                No te pierdas las fechas clave del proceso de admisión 2025.
              </p>
              <div className="space-y-4">
                {admissionData.dates.map((dateItem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary-900">{dateItem.date}</p>
                      <p className="text-sm text-gray-600">{dateItem.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-950 mb-4">
              Planes de Financiamiento
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ofrecemos planes de financiamiento flexibles adaptados a las necesidades de cada familia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {admissionData.tuition.plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedPlan(index)}
                className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedPlan === index
                    ? 'border-primary-600 bg-primary-50 shadow-xl scale-105'
                    : 'border-gray-200 bg-white hover:border-primary-300 hover:shadow-md'
                }`}
              >
                {selectedPlan === index && (
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-heading font-semibold text-primary-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                <p className="text-3xl font-bold text-primary-600">{plan.price}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            {admissionData.tuition.description}
          </p>
        </div>
      </section>

      <section className="py-16 bg-primary-600">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Comienza tu postulación hoy
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Completa el formulario de admisión y da el primer paso hacia una educación de excelencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admision"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200"
              >
                Iniciar Postulación
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-700 text-white font-semibold rounded-xl hover:bg-primary-800 transition-all duration-200"
              >
                Contactar Admisiones
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  )
}
