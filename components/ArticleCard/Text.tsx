import { PostType } from "@/types/index"
import Icon from "../Icon"
import Permalink from "../Permalink"
import { dateString } from "@/helpers/date"

export default function Text({ title, slug, date }: PostType) {
  return (
    <Permalink href={`/post/${slug}`} className="block group">
      <div className="mb-2 text-sm dark:text-gray-300 text-gray-600 font-semibold duration-200 group-hover:text-black dark:group-hover:text-green-500">
        {title}
      </div>
      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-500 font-medium">
          {dateString(date).format("DD dddd, YYYY")}
        </div>
        <Icon size={14} icon="bookmark" />
      </div>
    </Permalink>
  )
}
