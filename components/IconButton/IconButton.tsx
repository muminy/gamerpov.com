import cn from "classnames"
import { IconButtonProps } from "."
import Icon from "../Icon/Icon"
import style from "./style.module.css"

export default function IconButton({
  icon,
  className,
  size = 16,
  color,
  bgType = "secondary",
  ...remaining
}: IconButtonProps) {
  const types = { none: style.none, secondary: style.secondary }
  return (
    <button
      {...remaining}
      className={cn(style.container, types[bgType], className)}
      aria-label={icon}
    >
      <Icon size={size} color={color} icon={icon} />
    </button>
  )
}
