import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { calendarData, calendarLegend, type CalendarEventType } from '@/data/content'
import { SEO } from '@/components/layout/SEO'

const typeStyles: Record<CalendarEventType, string> = {
  clases: 'bg-primary-100 text-primary-700 border-primary-200',
  feriado: 'bg-red-50 text-red-700 border-red-200',
  reunion: 'bg-amber-50 text-amber-700 border-amber-200',
  evaluacion: 'bg-accent-100 text-accent-700 border-accent-200',
  evento: 'bg-green-50 text-green-700 border-green-200',
}

export default function Calendario() {
  const [activeType, setActiveType] = useState<CalendarEventType | 'todos'>('todos')

  const months = calendarData.map((m) => ({
    ...m,
    events:
      activeType === 'todos'
        ? m.events
        : m.events.filter((e) => e.type === activeType),
  }))

  return (
    <>
      <SEO
        title="Colegio Horizonte | Calendario Escolar"
        description="Calendario escolar 2025: inicio de clases, feriados, reuniones de apoderados, evaluaciones y eventos."
        pathname="/calendario"
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
                Organización escolar
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-950 mb-6">
                Calendario Escolar 2025
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Consulta las fechas clave del año académico: inicio de clases, feriados,
                reuniones de apoderados, evaluaciones y eventos.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setActiveType('todos')}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeType === 'todos'
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Todos
              </button>
              {calendarLegend.map((item) => (
                <button
                  key={item.type}
                  onClick={() => setActiveType(item.type)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                    activeType === item.type
                      ? `${typeStyles[item.type]} shadow-md`
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {months.map((month, mi) => (
                <motion.div
                  key={month.month}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: mi * 0.05 }}
                  className="bg-gray-50 rounded-2xl p-6"
                >
                  <h2 className="text-xl font-heading font-bold text-primary-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary-600" />
                    {month.month}
                  </h2>
                  {month.events.length === 0 ? (
                    <p className="text-sm text-gray-400">Sin actividades en este filtro.</p>
                  ) : (
                    <ul className="space-y-3">
                      {month.events.map((event, ei) => (
                        <li
                          key={ei}
                          className={`flex items-start gap-3 p-3 rounded-xl border ${typeStyles[event.type]}`}
                        >
                          <span className="font-bold text-sm w-8 flex-shrink-0">{event.day}</span>
                          <span className="text-sm font-medium leading-snug">{event.title}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>

            <p className="text-center text-gray-500 text-sm mt-12 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Las fechas pueden ajustarse por circulares de la dirección. Consulta también la sección de Noticias.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}
