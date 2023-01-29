import classNames from "classnames"
import { BadgeType } from "."

export default function Badge({ text, className }: BadgeType) {
  return (
    <div
      className={classNames(
        "text-sm font-semibold px-2 py-0.5 bg-primary text-black rounded-lg",
        className
      )}
    >
      {text}
    </div>
  )
}
