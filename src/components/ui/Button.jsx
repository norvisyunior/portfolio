const Button = ({ children, variant = 'primary', href, onClick, className = '' }) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer text-sm'

  const variants = {
    primary:
      'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-primary/30 hover:scale-105',
    secondary: 'glass-card hover:bg-surface text-text',
    outline: 'border-2 border-primary/30 text-primary hover:bg-primary/10',
    ghost: 'text-text-muted hover:text-text hover:bg-surface/50',
  }

  const styles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={styles}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  )
}

export default Button
