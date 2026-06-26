import { useEffect, useRef } from 'react'
import { FiGithub, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi'
import { personalInfo } from '@/data/personal'

const Hero = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() {
        this.reset()
      }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.2 + 0.2
        this.speedX = (Math.random() - 0.5) * 0.2
        this.speedY = (Math.random() - 0.5) * 0.2
        this.opacity = Math.random() * 0.25 + 0.05
      }
      update() {
        this.x += this.speedX
        this.y += this.speedY
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`
        ctx.fill()
      }
    }

    const count = Math.min(40, Math.floor(window.innerWidth / 30))
    for (let i = 0; i < count; i++) particles.push(new Particle())

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.04 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      connectParticles()
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])


  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Subtle grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-bg-secondary/80 mb-6 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-text-muted text-[11px] font-medium tracking-wide uppercase">Disponible para trabajar</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-7xl md:text-[100px] font-bold mb-3 leading-[0.95] tracking-tight animate-fade-in-up">
          <span className="text-text">Norvis</span>
          <br />
          <span className="gradient-text">Yunior</span>
        </h1>

        {/* Role */}
        <p className="text-text-muted text-base sm:text-lg md:text-xl font-light mb-2 animate-fade-in-up">
          {personalInfo.title}
        </p>

        {/* Divider */}
        <div className="w-8 h-px bg-border mx-auto mb-2" />

        {/* Bio */}
        <p className="text-text-muted/60 text-xs sm:text-sm max-w-md mx-auto leading-relaxed mb-6 animate-fade-in-up">
          {personalInfo.shortBio}
        </p>

        {/* CTAs + Social - juntos */}
        <div className="flex flex-col items-center gap-4 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <a href="#projects" className="btn-primary !py-3 !px-6 !text-sm">
              Ver Proyectos
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-text text-sm font-semibold hover:bg-surface hover:border-surface-light transition-all duration-300">
              Contactarme
            </a>
          </div>

          <div className="flex items-center gap-2">
            {[
              { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
              { icon: FiMail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`, label: 'Email' },
              { icon: FiDownload, href: '/CV_NorvisYunior.pdf', label: 'CV', download: true },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                download={s.download}
                className="p-2.5 rounded-lg border border-border text-text-muted hover:text-text hover:bg-surface hover:border-surface-light transition-all duration-300"
                aria-label={s.label}
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to About */}
      <div className="absolute bottom-6 left-1/2 max-w-6xl w-full -translate-x-1/2 px-6 flex justify-end">
        <a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="text-text-muted/50 hover:text-text group text-sm transition-all flex items-center gap-1.5"
        >
          <span className="group-hover:translate-x-0.5 transition-transform duration-300">Siguiente</span>
          <FiArrowDown size={12} className="animate-bounce group-hover:text-primary transition-colors duration-300" />
        </a>
      </div>

    </section>
  )
}

export default Hero
