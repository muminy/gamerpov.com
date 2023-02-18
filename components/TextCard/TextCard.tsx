import { PostType } from "@/types/index"
import dayjs from "dayjs"
import Permalink from "../Permalink"

export default function TextCard({ title, date, slug }: PostType) {
  return (
    <Permalink
      className="block text-sm space-y-1 group"
      href={`/post/${slug}`}
    >
      <div className="font-semibold group-hover:text-blue-500 duration-200">
        {title}
      </div>
      <div className="text-gray-500 text-xs">
        {dayjs(date).locale("tr").format("DD MMMM, YYYY")}
      </div>
    </Permalink>
  )
}
