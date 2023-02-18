import classNames from "classnames"
import cn from "classnames"
import { IconButtonProps } from "."
import Icon from "../Icon/Icon"
import style from "./style.module.css"

export default function IconButton({
  icon,
  className,
  size = 16,
  color,
  text,
  textClassName,
  isDark,
  ...remaining
}: IconButtonProps) {
  return (
    <button
      {...remaining}
      className={cn(
        style.container,
        className,
        "dark:bg-dark-secondary bg-gray-100 dark:text-white",
        {
          "bg-dark-secondary text-white": isDark,
        }
      )}
      aria-label={icon}
    >
      <Icon size={size} color={color} icon={icon} />
      {text && (
        <span
          className={classNames(
            "text-xs whitespace-nowrap font-semibold",
            textClassName
          )}
        >
          {text}
        </span>
      )}
    </button>
  )
}
