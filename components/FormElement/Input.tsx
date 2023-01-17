import classNames from "classnames"
import { forwardRef } from "react"
import { InputProps } from "."

export default forwardRef<any, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={classNames(className, "custom-input")}
    />
  )
})
