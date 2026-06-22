import { useState, useCallback, useRef } from 'react'
import { FiGithub, FiExternalLink, FiImage, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionHeader from '@/components/ui/SectionHeader'
import { projects } from '@/data/projects'
import ImageGallery from '@/components/ui/ImageGallery'

const Projects = () => {
  const [active, setActive] = useState(0)
  const [gallery, setGallery] = useState(null)
  const scrollRef = useRef(null)
  const openGallery = useCallback((images) => setGallery(images), [])
  const closeGallery = useCallback(() => setGallery(null), [])

  const scrollTo = (index) => {
    setActive(index)
    scrollRef.current?.children[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  }

  const next = () => {
    const i = (active + 1) % projects.length
    scrollTo(i)
  }

  const prev = () => {
    const i = (active - 1 + projects.length) % projects.length
    scrollTo(i)
  }

  const handleScroll = () => {
    const el = scrollRef.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / el.clientWidth)
    if (idx !== active) setActive(idx)
  }

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Proyectos" subtitle="Proyectos destacados que demuestran mis habilidades" />
      </div>

      {/* Filmstrip */}
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="snap-start shrink-0 w-full px-6"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-xl overflow-hidden border border-border/50 bg-bg-secondary transition-all duration-500">
                  <div
                    className="absolute inset-0 opacity-[0.04] transition-colors duration-700"
                    style={{ backgroundColor: project.accentColor }}
                  />

                  <div className="relative flex flex-col lg:flex-row min-h-[300px]">
                    <div className="relative lg:w-[45%] h-48 lg:h-auto overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top transition-all duration-700 hover:scale-105"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`}>
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                              backgroundSize: '30px 30px',
                            }}
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent lg:bg-gradient-to-r lg:from-bg-secondary lg:via-transparent lg:to-transparent" />
                    </div>

                    <div className="flex-1 p-6 lg:p-7 flex flex-col justify-center">
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.15em] text-text-muted/50 mb-2">
                        {project.type}
                      </span>

                      <h3 className="text-xl lg:text-2xl font-bold text-text leading-tight mb-1.5 tracking-tight">
                        {project.title}
                      </h3>

                      {project.subtitle && (
                        <p className="text-xs text-text-muted/60 font-medium mb-2.5">{project.subtitle}</p>
                      )}

                      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
                        {project.stats.map((stat) => (
                          <div key={stat.label} className="flex items-center gap-1.5">
                            <span className="text-[8px] uppercase tracking-[0.1em] text-text-muted/40 font-medium">{stat.label}</span>
                            <span className="text-[11px] font-semibold text-text">{stat.value}</span>
                          </div>
                        ))}
                      </div>

                      <p className="text-[13px] text-text-muted leading-relaxed mb-4 max-w-lg">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.stack.map((tech) => (
                          <div key={tech.name} className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-surface/30 border border-border/20">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tech.color }} />
                            <span className="text-[10px] font-medium text-text-muted/80">{tech.name}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-3 border-t border-border/20">
                        {project.github && project.github !== '#' && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-semibold transition-all duration-300 active:scale-95"
                            style={{
                              backgroundColor: `${project.accentColor}15`,
                              color: project.accentColor,
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = `${project.accentColor}25`}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = `${project.accentColor}15`}
                          >
                            <FiGithub size={14} /> Código
                          </a>
                        )}
                        {project.note && (
                          <span className="text-[11px] text-text-muted/60 italic leading-relaxed">
                            {project.note}
                          </span>
                        )}
                        {project.demo && project.demo !== '#' && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-semibold text-white transition-all duration-300 active:scale-95"
                            style={{ backgroundColor: project.accentColor }}
                            onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.15)'; e.currentTarget.style.boxShadow = `0 4px 12px ${project.accentColor}40` }}
                            onMouseLeave={e => { e.currentTarget.style.filter = 'none'; e.currentTarget.style.boxShadow = 'none' }}
                          >
                            <FiExternalLink size={14} /> Demo
                          </a>
                        )}
                        {project.gallery && (
                          <button onClick={() => openGallery(project.gallery)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[12px] font-semibold transition-all duration-300 active:scale-95"
                            style={{
                              backgroundColor: `${project.accentColor}15`,
                              color: project.accentColor,
                            }}
                            onMouseEnter={e => e.currentTarget.style.backgroundColor = `${project.accentColor}25`}
                            onMouseLeave={e => e.currentTarget.style.backgroundColor = `${project.accentColor}15`}
                          >
                            <FiImage size={14} /> Galería
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={prev}
            className="p-2 rounded-full border border-border/60 text-text-muted hover:text-text hover:border-border transition-all">
            <FiChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2.5">
            {projects.map((project, i) => (
              <button key={project.id} onClick={() => scrollTo(i)}
                className="relative transition-all duration-300"
              >
                <div
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? 'w-7 h-2' : 'w-2 h-2 bg-border/40 hover:bg-border/60'
                  }`}
                  style={i === active ? { backgroundColor: project.accentColor } : {}}
                />
              </button>
            ))}
          </div>

          <button onClick={next}
            className="p-2 rounded-full border border-border/60 text-text-muted hover:text-text hover:border-border transition-all">
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {gallery && <ImageGallery images={gallery} currentIndex={0} onClose={closeGallery} />}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}

export default Projects
