import { FiMapPin, FiDownload, FiAward, FiCalendar, FiCode, FiServer, FiDatabase, FiTool } from 'react-icons/fi'
import SectionHeader from '@/components/ui/SectionHeader'
import { allSkills } from '@/data/projects'
import { personalInfo } from '@/data/personal'
import { education } from '@/data/experience'

const categoryIcons = {
  Frontend: FiCode,
  Backend: FiServer,
  'Bases de Datos': FiDatabase,
  Herramientas: FiTool,
}

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Sobre Mí" subtitle="Quién soy, qué sé hacer y dónde estudié" />

        {/* Top row - Identity + Education */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Identity card */}
          <div className="lg:col-span-2 card p-8">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-bold">
                  NY
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-text mb-1">{personalInfo.name}</h3>
                <p className="text-primary text-sm font-semibold mb-3">{personalInfo.title}</p>

                <div className="flex items-center gap-2 text-text-muted text-sm mb-5">
                  <FiMapPin size={14} />
                  <span>{personalInfo.location}</span>
                </div>

                <p className="text-text-muted text-sm leading-relaxed mb-6">{personalInfo.bio}</p>

                <a
                  href="/CV_NorvisYunior.docx"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-all duration-300 border border-primary/20"
                >
                  <FiDownload size={15} />
                  Descargar CV
                </a>
              </div>
            </div>
          </div>

          {/* Education card */}
          <div className="card p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 rounded-lg bg-accent-2/10 flex items-center justify-center">
                <FiAward className="text-accent-2" size={18} />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-muted">Educación</h3>
            </div>

            <div className="space-y-5">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h4 className="text-text font-bold text-sm mb-1">{edu.degree}</h4>
                  <p className="text-primary text-sm font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-3 text-text-muted text-xs">
                    <span className="flex items-center gap-1">
                      <FiCalendar size={11} />
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="mt-6 pt-5 border-t border-border">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 rounded-lg bg-surface/50">
                  <p className="text-xl font-bold text-text">+9</p>
                  <p className="text-[10px] text-text-muted uppercase tracking-wider">Proyectos</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-surface/50">
                  <p className="text-xl font-bold text-text">15+</p>
                  <p className="text-[10px] text-text-muted uppercase tracking-wider">Tecnologías</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="card p-8">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <FiCode className="text-primary" size={18} />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-muted">Habilidades Técnicas</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allSkills.map((category) => {
              const Icon = categoryIcons[category.category] || FiCode
              return (
                <div key={category.category}>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={14} className="text-text-muted/60" />
                    <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
                      {category.category}
                    </h4>
                  </div>

                  <div className="space-y-1">
                    {category.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface/50 transition-colors duration-200 cursor-default"
                      >
                        <div
                          className="w-7 h-7 rounded-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
                          style={{ backgroundColor: `${skill.color}10` }}
                        >
                          <skill.icon size={14} style={{ color: skill.color }} />
                        </div>
                        <span className="text-text text-sm font-medium">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
