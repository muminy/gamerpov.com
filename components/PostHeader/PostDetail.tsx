import { getDate } from "@/helpers/utils"
import classNames from "classnames"
import { PostDetailProps } from "."
import Icon from "../Icon"
import ViewCount from "../ViewCount"

export default function PostDetail({
  author,
  slug,
  date,
}: Pick<PostDetailProps, "author" | "slug" | "date">) {
  const Divider = () => (
    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-dark-border mx-2" />
  )
  return (
    <div
      className={classNames(
        "flex items-center space-x-2 text-white dark:text-gray-300",
        "font-medium mb-2 text-xs"
      )}
    >
      <div className="flex items-center space-x-1 truncate">
        <Icon size={14} icon="pen" />
        <span>{author}</span>
      </div>
      <Divider />
      <ViewCount slug={slug} />
      <Divider />
      <div className="flex items-center space-x-1 truncate w-auto">
        <span>{getDate(date)}</span>
      </div>
    </div>
  )
}
