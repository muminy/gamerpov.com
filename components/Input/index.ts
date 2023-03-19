import { IconTypes } from "@/icons/index"

export type InputProps = JSX.IntrinsicElements["input"] & {
  iType?: "BORDER" | "BG"
  icon?: IconTypes
}
export { default } from "./Input"
