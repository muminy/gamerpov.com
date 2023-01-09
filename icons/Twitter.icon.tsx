import { SvgProps } from "@/types/icon";

export default function TwitterIcon({
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
      <path d="M5 7H19" stroke={color} strokeWidth={2} strokeLinecap="round" />
      <path d="M5 12H19" stroke={color} strokeWidth={2} strokeLinecap="round" />
      <path d="M5 17H19" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}
