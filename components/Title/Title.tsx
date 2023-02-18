import classNames from "classnames"
import { TitleProps } from "."

export default function Title({
  title,
  description,
  align = "left",
  className,
}: TitleProps) {
  return (
    <div
      className={classNames("mb-4", className, {
        "text-center": align === "center",
      })}
    >
      <div className="font-bold dark:text-white text-gray-900">
        {title}
      </div>
      {description && (
        <div className="text-sm dark:text-gray-400 text-gray-500">
          {description}
        </div>
      )}
    </div>
  )
}
