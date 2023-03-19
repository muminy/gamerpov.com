import { BgColorTypes } from "@/types/index"
import { IconTypes } from "@/icons/index"

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  text: string
  isLoading?: boolean
  icon?: IconTypes
  size?: number
  bgColor?: keyof typeof BgColorTypes
}

export { default } from "./Button"
