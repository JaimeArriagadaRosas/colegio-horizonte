import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import { schoolData } from '@/data/content'
import { Link } from 'react-router-dom'
import { submitContact } from '@/utils/contact'
import { SEO } from '@/components/layout/SEO'

type FieldName = 'name' | 'email' | 'phone' | 'subject' | 'message' | 'website'

type Errors = Partial<Record<FieldName, string>>

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  website: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})

  useEffect(() => {
    sessionStorage.setItem('contact_start_time', String(Date.now()))
  }, [])

  const validate = (values: typeof initialForm): Errors => {
    const next: Errors = {}
    if (!values.name.trim()) next.name = 'El nombre es requerido'
    if (!values.email.trim()) next.email = 'El correo es requerido'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = 'Correo inválido'
    if (!values.phone.trim()) next.phone = 'El teléfono es requerido'
    if (!values.subject) next.subject = 'Selecciona un asunto'
    if (!values.message.trim()) next.message = 'El mensaje es requerido'
    return next
  }

  const handleChange = (name: FieldName, value: string) => {
    setForm((prev) => {
      const next = { ...prev, [name]: value }
      if (touched[name]) {
        const fieldErrors = validate(next)
        setErrors((prevErrors) => ({ ...prevErrors, [name]: fieldErrors[name] || '' }))
      }
      return next
    })
  }

  const handleBlur = (name: FieldName) => {
    setTouched((prev) => ({ ...prev, [name]: true }))
    const fieldErrors = validate(form)
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError(null)

    const allTouched: Record<FieldName, boolean> = {
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
      website: true,
    }
    setTouched(allTouched)

    const fieldErrors = validate(form)
    setErrors(fieldErrors)

    if (Object.keys(fieldErrors).length > 0) return

    if (form.website && form.website.trim().length > 0) {
      return
    }

    const { website: _website, ...payload } = form
    const result = await submitContact(payload)

    if (result.success) {
      setSubmitted(true)
      setForm(initialForm)
      setErrors({})
      setTouched({})
      setTimeout(() => setSubmitted(false), 5000)
    } else {
      setServerError(result.message)
    }
  }

  return (
    <>
      <SEO title="Colegio Horizonte | Contacto" description="Contáctanos para más información sobre admisiones, programas y visitas." pathname="/contacto" />
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
              Estamos aquí para ti
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-950 mb-6">
              Contáctanos
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              ¿Tienes preguntas o quieres más información? No dudes en ponerte en contacto
              con nosotros.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-950 mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-gray-600 mb-8">
                  Completa el formulario y te responderemos a la brevedad.
                </p>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-700 font-medium">
                      ¡Mensaje enviado con éxito! Te contactaremos pronto.
                    </p>
                  </motion.div>
                )}

                {serverError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
                  >
                    {serverError}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo *
                      </label>
                      <input
                        id="contact-name"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                        placeholder="Ej: Juan Pérez"
                      />
                      {touched.name && errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        id="contact-email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        type="email"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                        placeholder="correo@ejemplo.com"
                      />
                      {touched.email && errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                      </label>
                      <input
                        id="contact-phone"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all`}
                        placeholder="+56 9 1234 5678"
                      />
                      {touched.phone && errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto *
                      </label>
                      <select
                        id="contact-subject"
                        value={form.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        onBlur={() => handleBlur('subject')}
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white`}
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="admision">Admisión</option>
                        <option value="informacion">Información general</option>
                        <option value="visita">Agendar visita</option>
                        <option value="otro">Otro</option>
                      </select>
                      {touched.subject && errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="contact-message"
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none`}
                      placeholder="Escribe tu mensaje aquí..."
                    />
                    {touched.message && errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                    )}
                  </div>

                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    className="-mt-6 -sr-only"
                    aria-hidden="true"
                    value={form.website}
                    onChange={(e) => handleChange('website', e.target.value)}
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/25"
                  >
                    Enviar mensaje
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-primary-50 rounded-2xl p-6 border border-primary-100">
                <h3 className="text-lg font-heading font-semibold text-primary-900 mb-4">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-primary-900 text-sm">Dirección</p>
                      <p className="text-gray-600 text-sm">{schoolData.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-primary-900 text-sm">Teléfono</p>
                      <a
                        href={`tel:${schoolData.phone}`}
                        className="text-gray-600 text-sm hover:text-primary-600 transition-colors"
                      >
                        {schoolData.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-primary-900 text-sm">Email</p>
                      <a
                        href="mailto:info@colegiohorizonte.cl"
                        className="text-gray-600 text-sm hover:text-primary-600 transition-colors"
                      >
                        {schoolData.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-primary-900 text-sm">Horario</p>
                      <p className="text-gray-600 text-sm">
                        Lun - Vie: 8:00 - 18:00
                        <br />
                        Sáb: 9:00 - 13:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-heading font-semibold mb-3">
                  ¿Prefieres una visita presencial?
                </h3>
                <p className="text-primary-100 text-sm mb-4">
                  Te invitamos a conocer nuestras instalaciones y vivir la experiencia Horizonte.
                </p>
                <Link
                  to="/admision"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-600 font-medium rounded-lg text-sm hover:bg-gray-100 transition-colors"
                >
                  Agendar visita
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  title="Ubicación del Colegio Horizonte"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-70.6380%2C-33.4310%2C-70.6140%2C-33.4210&layer=mapnik&marker=-33.4260%2C-70.6260"
                  className="w-full aspect-video"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Av.+Providencia+1234,+Santiago,+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-100 px-4 py-3 text-sm font-medium text-primary-700 hover:bg-gray-200 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Cómo llegar (Google Maps)
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
