import * as React from "react"

const Input = React.forwardRef(({ className = "", ...props }, ref) => {
  return <input className={`input ${className}`.trim()} ref={ref} {...props} />
})
Input.displayName = "Input"

export { Input }
