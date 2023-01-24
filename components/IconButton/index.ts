import { IconProps } from "../Icon"

export type IconButtonProps = IconProps &
  JSX.IntrinsicElements["button"] & {
    bgType?: "secondary" | "none"
  }

export { default } from "./IconButton"
