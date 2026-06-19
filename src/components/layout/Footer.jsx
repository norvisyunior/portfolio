import { FiGithub, FiMail, FiArrowUp } from 'react-icons/fi'
import { personalInfo } from '@/data/personal'

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col items-center gap-6">
          <a href="#hero" className="text-xl font-black tracking-tight">
            <span className="text-text-muted">&lt;</span>
            <span className="gradient-text">NY</span>
            <span className="text-text-muted"> /&gt;</span>
          </a>

          <div className="flex flex-wrap justify-center gap-5">
            {['Inicio', 'Sobre Mí', 'Experiencia', 'Proyectos', 'Contacto'].map((label, i) => (
              <a
                key={label}
                href={`#${['hero', 'about', 'experience', 'projects', 'contact'][i]}`}
                className="text-text-muted hover:text-text text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {[
              { icon: FiGithub, href: personalInfo.github },
              { icon: FiMail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}` },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-border text-text-muted hover:text-text hover:bg-surface transition-all duration-300"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>

          <div className="w-full max-w-xs h-px bg-border" />

          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
            <p className="text-text-muted/50 text-xs">
              &copy; {new Date().getFullYear()} {personalInfo.name}
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-text-muted/50 hover:text-text group text-sm transition-all flex items-center gap-1.5"
            >
              <span className="group-hover:-translate-x-0.5 transition-transform duration-300">Volver arriba</span>
              <FiArrowUp size={12} className="animate-bounce group-hover:text-primary transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
