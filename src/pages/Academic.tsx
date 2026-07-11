import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Baby, Sparkles, BookOpen, GraduationCap, MonitorSmartphone, Users, Globe, Lightbulb } from 'lucide-react'
import { programsData, methodologyData } from '@/data/content'

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Baby,
  Sparkles,
  BookOpen,
  GraduationCap,
  MonitorSmartphone,
  Users,
  Globe,
  Lightbulb,
}

export default function Academic() {
  const [selectedProgram, setSelectedProgram] = useState(programsData[0])

  return (
    <div>
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Formación integral
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-950 mb-6">
              Oferta Académica
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Desde Nursery hasta Educación Media, ofrecemos una formación integral que combina
              excelencia académica con el desarrollo de habilidades para la vida.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-6">
            {programsData.map((program, index) => {
              const Icon = iconMap[program.icon]
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedProgram(program)}
                  className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-300 ${
                    selectedProgram.id === program.id
                      ? 'border-primary-600 bg-primary-50 shadow-lg'
                      : 'border-gray-200 hover:border-primary-300 hover:shadow-md'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    selectedProgram.id === program.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-primary-100 text-primary-600'
                  }`}>
                    {Icon && <Icon className="w-6 h-6" />}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary-900 mb-1">
                    {program.title}
                  </h3>
                  <p className="text-sm text-gray-500">{program.subtitle}</p>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            key={selectedProgram.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 bg-gray-50 rounded-2xl p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium mb-4">
                    {selectedProgram.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-950 mb-4">
                    {selectedProgram.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedProgram.description}
                  </p>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-primary-900 mb-3">
                    Características del programa:
                  </h4>
                  <ul className="space-y-3">
                    {selectedProgram.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h4 className="font-heading font-semibold text-primary-900 mb-3">Horario</h4>
                  <p className="text-gray-600">{selectedProgram.schedule}</p>
                </div>
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl p-6 text-white">
                  <h4 className="font-heading font-semibold mb-2">¿Te interesa este programa?</h4>
                  <p className="text-primary-100 text-sm mb-4">
                    Agenda una visita para conocer más sobre nuestra oferta académica.
                  </p>
                  <Link
                    to="/admision"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Postular Ahora
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-950 mb-4">
              Nuestra Metodología
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {methodologyData.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologyData.pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {iconMap[pillar.title === 'Aprendizaje Activo' ? 'Lightbulb' : pillar.title === 'Pensamiento Crítico' ? 'Users' : pillar.title === 'Trabajo Colaborativo' ? 'Users' : 'MonitorSmartphone'] && (
                    (() => {
                      const PillarIcon = iconMap[pillar.title === 'Aprendizaje Activo' ? 'Lightbulb' : pillar.title === 'Pensamiento Crítico' ? 'Users' : pillar.title === 'Trabajo Colaborativo' ? 'Users' : 'MonitorSmartphone']
                      return PillarIcon ? <PillarIcon className="w-8 h-8 text-primary-600" /> : null
                    })()
                  )}
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                ¿Listo para inscribir a tu hijo/a?
              </h2>
              <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
                Conoce todos los detalles del proceso de admisión y comienza a formar parte de
                nuestra comunidad educativa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/admision"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200"
                >
                  Ver Proceso de Admisión
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-700 text-white font-semibold rounded-xl hover:bg-primary-800 transition-all duration-200"
                >
                  Solicitar Información
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
