import { SvgProps } from "@/types/icon"

export function MoonFillIcon({ size = 24, color = "currentColor" }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 4C15.292 4 15.438 4 15.5781 4.04183C16.192 4.22522 16.4775 4.93111 16.1637 5.48976C16.0921 5.61719 15.8744 5.82779 15.4389 6.249C13.935 7.70352 13 9.74257 13 12C13 14.2574 13.935 16.2965 15.4389 17.751C15.8744 18.1722 16.0921 18.3828 16.1637 18.5102C16.4775 19.0689 16.192 19.7748 15.5781 19.9582C15.438 20 15.292 20 15 20C10.5817 20 7 16.4183 7 12C7 7.58172 10.5817 4 15 4Z"
        fill={color}
      />
    </svg>
  )
}

export function LikeFillIcon({
  size = 24,
  color = "currentColor",
}: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
        fill={color}
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  )
}
export function SunFillIcon({ size = 24, color = "currentColor" }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="5" fill={color} />
      <path d="M12 8V4" stroke={color} strokeWidth="2" />
      <path d="M12 20V16" stroke={color} strokeWidth="2" />
      <path
        d="M9.17169 9.1712L6.34326 6.34277"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M17.6568 17.6566L14.8284 14.8281"
        stroke={color}
        strokeWidth="2"
      />
      <path d="M16 12L20 12" stroke={color} strokeWidth="2" />
      <path d="M4 12L8 12" stroke={color} strokeWidth="2" />
      <path
        d="M14.8283 9.1712L17.6567 6.34277"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M6.3432 17.6566L9.17163 14.8281"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  )
}
