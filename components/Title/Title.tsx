import { TitleProps } from "."
import Icon from "../Icon"

export default function Title({ title, icon }: TitleProps) {
  return (
    <div className="mb-4 flex items-center space-x-2">
      {icon && (
        <span className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-white dark:bg-opacity-10 rounded-lg">
          <Icon size={16} icon={icon} />
        </span>
      )}
      <span className="font-bold">{title}</span>
    </div>
  )
}
