import classNames from "classnames"
import { forwardRef } from "react"
import { TextAreaProps } from "."

const TextArea = forwardRef<any, TextAreaProps>(
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
TextArea.displayName = "TextArea"
export default TextArea
