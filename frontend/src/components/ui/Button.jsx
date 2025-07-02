import * as React from "react"
import { useNavigate } from "react-router-dom"
const Button = React.forwardRef(({ className = "", variant = "default", size = "default", redirect , ...props }, ref) => {

    const navigate = useNavigate();

    const baseClass = "btn"
    const variantClass = `btn-${variant}`
    const sizeClass = size === "default" ? "btn-default-size" : `btn-${size}`

    const classes = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim()

    return <button className={classes} ref={ref} {...props} onClick={() => {
        navigate(redirect)
    }}/>
})
Button.displayName = "Button"

export { Button }
