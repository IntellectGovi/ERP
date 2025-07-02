import * as React from "react"

const Button = React.forwardRef(({ className = "", variant = "default", size = "default", ...props }, ref) => {
  const baseClass = "btn"
  const variantClass = `btn-${variant}`
  const sizeClass = size === "default" ? "btn-default-size" : `btn-${size}`

  const classes = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim()

  return <button className={classes} ref={ref} {...props} />
})
Button.displayName = "Button"

export { Button }
