import { TitleProps } from "."

export default function Title({ title }: TitleProps) {
  return <div className="font-bold text-xl mt-14 mb-6">{title}</div>
}
