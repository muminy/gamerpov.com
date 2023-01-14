import cn from "classnames"
import { CommonButtonProps } from "."
import style from "./style.module.css"

export default function Gradient({ className, ...props }: CommonButtonProps) {
  return <button {...props} className={cn(style.gradient, className)} />
}
