import classNames from "classnames"
import { TagType } from "."
import Permalink from "../Permalink"

export default function Badge({ text, className, href }: TagType) {
  return (
    <Permalink
      href={href}
      title={text}
      className={classNames(
        "px-4 rounded-xl hover:dark:bg-dark-secondary hover:bg-gray-100 text-sm min-h-[40px]",
        "border-2 dark:border-dark-border",
        "flex items-center duration-300 text-center",
        className
      )}
    />
  )
}
