import { SvgProps } from "@/types/icon"

export function FlashIcon({ size = 24, color = "currentColor" }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path fill={color} d="M13 10h7l-9 13v-9H4l9-13z" />
    </svg>
  )
}
