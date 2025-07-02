function Badge({ className = "", variant = "default", ...props }) {
  const classes = `badge badge-${variant} ${className}`.trim()

  return <div className={classes} {...props} />
}

export { Badge }
