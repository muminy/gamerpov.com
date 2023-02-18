import classNames from "classnames"
import { TagType } from "."
import Permalink from "../Permalink"

export default function Badge({ text, className, slug }: TagType) {
  return (
    <Permalink
      href={`/category/${slug}`}
      title={text}
      className={classNames(
        "px-2 rounded-xl text-sm h-7",
        "bg-gray-100 dark:bg-dark-secondary dark:text-white",
        "flex items-center",
        className
      )}
    />
  )
}
