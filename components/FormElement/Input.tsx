import classNames from "classnames"
import { forwardRef } from "react"
import { InputProps } from "."

const Input = forwardRef<any, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={classNames(className, "custom-input")}
    />
  )
})
Input.displayName = "Input"
export default Input
