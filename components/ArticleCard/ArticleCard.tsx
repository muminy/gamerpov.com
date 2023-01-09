import { ArticleCardProps } from "."
import Icon from "../Icon"
import Permalink from "../Permalink"

export default function ArticleCard({ image, title }: ArticleCardProps) {
  return (
    <Permalink href={"/"} className="block relative">
      <img
        src={image}
        className="w-full h-[120px] object-cover rounded-md mb-2"
      />
      <button className="w-9 h-9 text-white rounded-full bg-black bg-opacity-30 flex items-center justify-center absolute top-2 right-2">
        <Icon size={16} icon="external" />
      </button>
      <div className="font-semibold">{title}</div>
    </Permalink>
  )
}
