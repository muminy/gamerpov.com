import classNames from "classnames"
import { useState } from "react"
import { InputProps } from "."
import Icon from "../Icon"

export default function Input({
  iType = "BORDER",
  className,
  icon,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div
      className={classNames(
        "relative group flex items-center",
        "rounded-2xl duration-200 overflow-hidden",
        {
          "bg-gray-100 border": iType === "BG",
          "border-2 dark:border-dark-border dark:ring-offset-dark-bg":
            iType === "BORDER",
          "ring-2 ring-gray-300 dark:ring-dark-secondary ring-offset-2":
            isFocused,
        }
      )}
    >
      <input
        className={classNames(
          "px-5 py-3 text-sm",
          "outline-none bg-transparent",
          className
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {icon && (
        <div className="absolute right-4 text-gray-500">
          <Icon icon={icon} />
        </div>
      )}
    </div>
  )
}
