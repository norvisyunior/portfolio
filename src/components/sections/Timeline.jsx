import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import SectionHeader from '@/components/ui/SectionHeader'
import { experience } from '@/data/experience'

const Timeline = () => {
  return (
    <section id="experience" className="py-24 px-6 relative bg-bg-secondary">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Experiencia" subtitle="Resumen de los desafíos técnicos que he abordado y las soluciones implementadas para optimizar procesos" />

        <div className="relative">
          {/* Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="absolute left-5 md:left-1/2 w-2.5 h-2.5 -translate-x-[4px] md:-translate-x-[4px] mt-5 z-10 bg-primary rounded-full" />

                <div className={`ml-14 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="card p-6 group">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-wider">
                        {item.type}
                      </span>
                      <span className="text-text-muted text-xs flex items-center gap-1">
                        <FiCalendar size={11} />
                        {item.period}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-text mb-2">{item.title}</h3>

                    <div className="flex flex-col gap-1 mb-4 text-text-muted text-sm">
                      <div className="flex items-center gap-2">
                        <FiBriefcase size={13} className="text-primary" />
                        <span className="font-medium text-text">{item.role}</span>
                        <span className="text-border">·</span>
                        <span>{item.company}</span>
                      </div>
                      <div className="flex items-center gap-1 ml-[22px]">
                        <FiMapPin size={11} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <p className="text-text-muted text-sm leading-relaxed mb-4">{item.description}</p>

                    <ul className="space-y-1.5">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-muted text-sm">
                          <span className="text-primary mt-1 text-xs">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
