import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Award, Heart, MonitorSmartphone, Users, Phone } from 'lucide-react'
import { schoolData, featuresData, testimonialsData } from '@/data/content'

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Award,
  Heart,
  MonitorSmartphone,
  Users,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <div>
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-primary-100/40 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                Admisiones 2025 Abiertas
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-950 leading-tight">
                Formando{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                  Líderes
                </span>{' '}
                con Valores
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                En el Colegio Horizonte combinamos excelencia académica con formación en valores
                para preparar a los líderes del mañana. Educación integral desde 1985.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/nosotros"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/25"
                >
                  Conócenos
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/admision"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl border-2 border-primary-600 hover:bg-primary-50 transition-all duration-200"
                >
                  Admisiones 2025
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl rotate-6 opacity-20" />
                <div className="absolute inset-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl -rotate-3 opacity-30" />
                <div className="absolute inset-8 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary-900 mb-2">
                      39 Años
                    </h3>
                    <p className="text-gray-600">de excelencia educativa</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: schoolData.students, label: 'Estudiantes', suffix: '+' },
              { number: schoolData.teachers, label: 'Docentes', suffix: '' },
              { number: schoolData.yearsExperience, label: 'Años de experiencia', suffix: '' },
              { number: schoolData.programs, label: 'Programas académicos', suffix: '' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-primary-600 mb-2">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-600 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
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
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nuestro compromiso es brindar una educación de calidad que forme personas íntegras
              y preparadas para el futuro.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuresData.map((feature, index) => {
              const Icon = iconMap[feature.icon]
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="card group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300">
                    {Icon && <Icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              )
            })}
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-950 mb-4">
              Lo que dicen las familias
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La confianza de las familias es nuestro mayor reconocimiento.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card relative"
              >
                <div className="absolute top-6 left-6 text-6xl text-primary-100 font-serif leading-none">
                  "
                </div>
                <div className="relative pt-8">
                  <p className="text-gray-700 leading-relaxed mb-6 italic">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-primary-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              ¿Listo para ser parte de nuestra comunidad?
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Las inscripciones para el período 2025 ya están abiertas. Agenda una visita
              y conoce de primera mano nuestra propuesta educativa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/admision"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200"
              >
                Inscribirse Ahora
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a
                href={`tel:${schoolData.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-700 text-white font-semibold rounded-xl hover:bg-primary-800 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
