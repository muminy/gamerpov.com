import classNames from "classnames"
import { NotFoundProps } from "."

export default function NotFound({ title, description }: NotFoundProps) {
  return (
    <div
      className={classNames(
        "text-center dark:bg-dark-secondary bg-gray-100 w-full",
        "w-full py-10 rounded-xl"
      )}
    >
      <div className="text-2xl font-bold">{title}</div>
      {description && (
        <div className="text-gray-500 dark:text-gray-500">
          {description}
        </div>
      )}
    </div>
  )
}
