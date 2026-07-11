import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Award, Heart, Lightbulb, Users, Target, HandHeart, ChevronRight } from 'lucide-react'
import { aboutData } from '@/data/content'

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Award,
  Heart,
  Lightbulb,
  Users,
  Target,
  HandHeart,
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
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
              Conoce nuestra historia
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-950 mb-6">
              Nuestra Historia
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Desde 1985, el Colegio Horizonte ha sido referente de educación de calidad,
              formando generaciones de líderes con sólidos valores humanos.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-950 mb-6">
                  Misión y Visión
                </h2>
                <div className="space-y-6">
                  <div className="p-6 bg-primary-50 rounded-xl border-l-4 border-primary-600">
                    <h3 className="text-xl font-heading font-semibold text-primary-900 mb-3">
                      Misión
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{aboutData.mission}</p>
                  </div>
                  <div className="p-6 bg-accent-50 rounded-xl border-l-4 border-accent-600">
                    <h3 className="text-xl font-heading font-semibold text-accent-900 mb-3">
                      Visión
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{aboutData.vision}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl rotate-3 opacity-20" />
                <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="space-y-6">
                    {aboutData.milestones.map((milestone, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                            <span className="text-primary-600 font-bold text-sm">
                              {milestone.year}
                            </span>
                          </div>
                        </div>
                        <div className="flex-1 pt-2">
                          <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
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
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los valores que guían nuestra labor educativa día a día.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {aboutData.values.map((value, index) => {
              const Icon = iconMap[value.icon]
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="card group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-600 transition-colors duration-300">
                      {Icon && <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-primary-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
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
              Nuestro Equipo Directivo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Líderes comprometidos con la excelencia educativa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300">
                  <span className="text-3xl font-heading font-bold text-primary-600 group-hover:text-white transition-colors">
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
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
              ¿Quieres conocer más sobre nosotros?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Agenda una visita y descubre todo lo que el Colegio Horizonte tiene para ofrecer.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200"
            >
              Contactar
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
