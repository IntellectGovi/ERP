import * as React from "react"

const Card = React.forwardRef(({ className = "", hover = false, ...props }, ref) => {
  const classes = `card ${hover ? "card-hover" : ""} ${className}`.trim()
  return <div ref={ref} className={classes} {...props} />
})
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`card-header ${className}`.trim()} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className = "", ...props }, ref) => (
  <h3 ref={ref} className={`card-title ${className}`.trim()} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className = "", ...props }, ref) => (
  <p ref={ref} className={`card-description ${className}`.trim()} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`card-content ${className}`.trim()} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className = "", ...props }, ref) => (
  <div ref={ref} className={`card-footer ${className}`.trim()} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
