const Badge = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-semibold bg-primary/10 text-primary-light border border-primary/20 ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge
