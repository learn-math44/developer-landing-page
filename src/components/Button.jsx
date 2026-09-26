export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
  const classes = ['button', variant === 'primary' ? 'button-primary' : 'button-secondary', className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
