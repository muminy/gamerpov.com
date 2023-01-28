import { IconProps } from "../Icon"

export type IconButtonProps = IconProps &
  JSX.IntrinsicElements["button"] & {
    text?: string
    textClassName?: string
    isDark?: boolean
  }

export { default } from "./IconButton"
