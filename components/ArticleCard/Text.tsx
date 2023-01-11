import { PostType } from "@/types/post"
import Icon from "../Icon"
import Permalink from "../Permalink"

export default function TextCard({ title, slug, date }: PostType) {
  return (
    <Permalink href={`/post/${slug}`} className="block border-b py-3">
      <div className="mb-2 font-bold">{title}</div>
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500 font-medium">{date}</div>
        <Icon size={14} icon="bookmark" />
      </div>
    </Permalink>
  )
}
