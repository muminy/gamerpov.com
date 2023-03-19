import icons from "@/icons/index"
import { IconProps } from "."

export default function Icon({ icon, color, size, className }: IconProps) {
  const IconComponent = icons[icon]
  return (
    <span className={className}>
      <IconComponent size={size} color={color} />
    </span>
  )
}
