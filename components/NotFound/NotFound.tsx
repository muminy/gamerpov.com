import classNames from "classnames"
import { NotFoundProps } from "."
import Icon from "../Icon"

export default function NotFound({ title, description }: NotFoundProps) {
  return (
    <div
      className={classNames(
        "text-center dark:bg-dark-secondary bg-gray-100 w-full",
        "w-full py-10 rounded-xl relative overflow-hidden"
      )}
    >
      <div className="z-10 relative">
        <div className="text-xl font-bold">{title}</div>
        {description && (
          <div className="text-gray-500 dark:text-gray-400">
            {description}
          </div>
        )}
      </div>
      <div className="absolute -left-8 -bottom-8 dark:text-gray-700 text-gray-300">
        <Icon size={120} icon="warning" />
      </div>
    </div>
  )
}
