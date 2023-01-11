import cn from "classnames"
import { IconButtonProps } from "."
import Icon from "../Icon/Icon"
import style from "./style.module.css"

export default function IconButton({
  icon,
  className,
  size = 16,
  color,
  ...remaining
}: IconButtonProps) {
  return (
    <button {...remaining} className={cn(style.container, className)}>
      <Icon size={size} color={color} icon={icon} />
    </button>
  )
}
