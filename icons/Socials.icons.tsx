import { SvgProps } from "@/types/icon"

export function TwitchIcon({ size = 24, color = "currentColor" }: SvgProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.95243 3.33337L4.3999 6.8859V18.2858H7.25705L7.25705 23.4951L12.4664 18.2858H14.3712L19.8285 12.8285L19.8285 3.33337H7.95243Z"
        fill="#000000"
      ></path>
      <path
        d="M8.78086 5.33337L6.3999 7.71433L6.3999 16.2858L9.25704 16.2858L9.25704 18.6667L11.638 16.2858L13.5428 16.2858L17.8285 12L17.8285 5.33337L8.78086 5.33337Z"
        fill="#9147FF"
      ></path>
      <path
        d="M14.9711 13.4286L16.8759 11.5238L16.8759 6.28574L9.25684 6.28574L9.25684 13.4286L11.1616 13.4286L11.1616 15.3334L13.0664 13.4286L14.9711 13.4286Z"
        fill="white"
      ></path>
      <path
        d="M12.1143 8.19037L13.0666 8.19037L13.0666 11.0475L12.1143 11.0475L12.1143 8.19037ZM15.4476 8.19037L15.4476 11.0475L14.4952 11.0475L14.4952 8.19037L15.4476 8.19037Z"
        fill="#9147FF"
      ></path>
    </svg>
  )
}

export function Twitch2Icon({ size = 24, color = "currentColor" }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill={color}
        d="M21 3v11.74l-4.696 4.695h-3.913l-2.437 2.348H6.913v-2.348H3V6.13L4.227 3H21zm-1.565 1.565H6.13v11.74h3.13v2.347l2.349-2.348h4.695l3.13-3.13V4.565zm-3.13 3.13v4.696h-1.566V7.696h1.565zm-3.914 0v4.696h-1.565V7.696h1.565z"
      />
    </svg>
  )
}

export function TwitterIcon({ size = 24, color = "currentColor" }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill={color}
        d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
      />
    </svg>
  )
}
export function FacebookIcon({ size = 24, color = "currentColor" }: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        fill={color}
        d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"
      />
    </svg>
  )
}
