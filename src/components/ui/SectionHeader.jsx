const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-text-muted text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-6">
        <div className="w-8 h-px bg-border" />
        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        <div className="w-8 h-px bg-border" />
      </div>
    </div>
  )
}

export default SectionHeader
