const Card = ({ children, className = '', hover = true }) => {
  return (
    <div
      className={`glass-card rounded-xl p-6 transition-all duration-300 ${
        hover ? 'hover:border-primary/20 hover:-translate-y-0.5' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Card
