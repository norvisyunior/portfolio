import { useState } from 'react'
import { FiSend, FiMail, FiPhone, FiMapPin, FiCheckCircle, FiGithub, FiArrowUpRight } from 'react-icons/fi'
import SectionHeader from '@/components/ui/SectionHeader'
import { personalInfo } from '@/data/personal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio - ${formData.name}`)
    const body = encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subject}&body=${body}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-24 px-6 relative bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Contacto" subtitle="¿Tienes un proyecto en mente? ¡Hablemos!" />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left */}
          <div className="lg:col-span-2 space-y-5">
            {/* Quote */}
            <div className="card p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary to-accent" />
              <p className="text-text text-base font-medium leading-relaxed">
                "Estoy disponible para nuevas oportunidades. Cuéntame tu idea y hagámosla realidad."
              </p>
            </div>

            {/* Contact cards */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group card !rounded-xl p-4 flex items-center gap-4 hover:!border-primary/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <FiMail className="text-primary" size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-text-muted/60 uppercase tracking-wider">Email</p>
                <p className="text-text text-sm font-medium truncate">
                  <span className="select-all">norviscabrera7</span>
                  <span className="text-text-muted/40">[at]</span>
                  <span className="select-all">gmail</span>
                  <span className="text-text-muted/40">[dot]</span>
                  <span className="select-all">com</span>
                </p>
              </div>
              <FiArrowUpRight size={14} className="text-text-muted/30 group-hover:text-primary transition-colors" />
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="group card !rounded-xl p-4 flex items-center gap-4 hover:!border-primary/30 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                <FiPhone className="text-accent" size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-text-muted/60 uppercase tracking-wider">Teléfono</p>
                <p className="text-text text-sm font-medium">{personalInfo.phone}</p>
              </div>
            </a>

            <div className="card !rounded-xl p-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent-2/10 flex items-center justify-center">
                <FiMapPin className="text-accent-2" size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-text-muted/60 uppercase tracking-wider">Ubicación</p>
                <p className="text-text text-sm font-medium">{personalInfo.location}</p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 card !rounded-xl py-3 hover:!border-primary/30 text-text-muted hover:text-text text-sm font-medium transition-all duration-300"
              >
                <FiGithub size={16} />
                GitHub
              </a>

            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="card p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary via-accent to-accent-2" />

              <div className="mb-7">
                <h3 className="text-lg font-bold text-text mb-1">Envíame un mensaje</h3>
                <p className="text-text-muted text-sm">Completa el formulario y te responderé pronto.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-text text-[11px] font-semibold uppercase tracking-[0.12em] mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Juan Pérez"
                    />
                  </div>
                  <div>
                    <label className="block text-text text-[11px] font-semibold uppercase tracking-[0.12em] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-text text-[11px] font-semibold uppercase tracking-[0.12em] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  {submitted ? (
                    <>
                      <FiCheckCircle size={17} />
                      ¡Mensaje listo!
                    </>
                  ) : (
                    <>
                      <FiSend size={17} />
                      Abrir Gmail y Enviar
                    </>
                  )}
                </button>

                <p className="text-text-muted/40 text-xs text-center">
                  Se abrirá Gmail con el mensaje prellenado
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
