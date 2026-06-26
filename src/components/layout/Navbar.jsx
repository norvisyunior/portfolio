import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiDownload } from 'react-icons/fi'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Experiencia', href: '#experience' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
      const sections = navLinks.map((l) => l.href.slice(1))
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s)
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(`#${s}`)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-lg font-black tracking-tight relative group">
            <span className="text-text-muted">&lt;</span>
            <span className="gradient-text">NY</span>
            <span className="text-text-muted"> /&gt;</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? 'text-text'
                    : 'text-text-muted hover:text-text'
                } group`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </a>
            ))}
            <a
              href="/CV_NorvisYunior.pdf"
              download
              className="ml-2 flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-bold hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
            >
              <FiDownload size={13} />
              CV
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg border border-border text-text-muted"
            aria-label="Menu"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-bg-secondary border-b border-border">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? 'bg-surface text-text'
                    : 'text-text-muted hover:text-text hover:bg-surface/50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/CV_NorvisYunior.pdf"
              download
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-primary to-accent text-white text-sm font-bold mt-3 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <FiDownload size={13} />
              Descargar CV
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
