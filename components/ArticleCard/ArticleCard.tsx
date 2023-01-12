import { PostType } from "@/types/post"
import Permalink from "../Permalink"
import style from "./style.module.css"
import Image from "next/image"
import { defaultImage } from "@/constants/default"
import IconButton from "../IconButton/IconButton"

export default function ArticleCard({ image, title, slug }: PostType) {
  return (
    <Permalink href={`/post/${slug}`} className={style.container}>
      <Image
        src={image?.sourceUrl ?? defaultImage}
        alt={image?.altText ?? title}
        blurDataURL={defaultImage}
        width={190}
        height={260}
        className="w-full rounded-md object-cover h-full"
      />
      <IconButton
        icon="external"
        id="external"
        className="ounded-full bg-black bg-opacity-30 flex items-center justify-center absolute top-2 right-2"
      />
      <div className="font-black leading-[34px] text-2xl uppercase py-4 px-4 text-white absolute bottom-0 left-0">
        {title}
      </div>
    </Permalink>
  )
}
