import { PostType } from "@/types/post"
import Image from "next/image"
import Icon from "../Icon"
import Permalink from "../Permalink"
import style from "./style.module.css"

export default function ArticleCard({
  image,
  title,
  slug,
}: Pick<PostType, "image" | "title" | "slug">) {
  return (
    <Permalink href={`/post/${slug}`} className={style.container}>
      <img
        src={image?.sourceUrl}
        alt={image?.altText}
        className="w-full rounded-md object-cover h-full"
      />
      <button className="w-9 h-9 text-white rounded-full bg-black bg-opacity-30 flex items-center justify-center absolute top-2 right-2">
        <Icon size={16} icon="external" />
      </button>
      <div className="font-black leading-[34px] text-2xl uppercase py-4 px-4 text-white absolute bottom-0 left-0">
        {title}
      </div>
    </Permalink>
  )
}
