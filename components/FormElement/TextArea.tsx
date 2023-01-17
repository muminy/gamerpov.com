import classNames from "classnames"
import { forwardRef } from "react"
import { TextAreaProps } from "."

export default forwardRef<any, TextAreaProps>(
  ({ className, rows = 2, ...props }, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={classNames(className, "custom-input")}
        rows={rows}
      />
    )
  }
)
