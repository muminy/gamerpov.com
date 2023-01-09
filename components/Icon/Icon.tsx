import icons from "@/icons/index"
import { IconProps } from "."

export default function Icon({ icon, color, size }: IconProps) {
  const IconComponent = icons[icon]
  return <IconComponent size={size} color={color} />
}
