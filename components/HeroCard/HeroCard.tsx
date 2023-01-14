import Permalink from "../Permalink"
import Icon from "../Icon"
import style from "./style.module.css"
import { HeroCardType } from "."
import Repeater from "../Repeater"
import { CategoriesTypes } from "@/types/post"
import Image from "next/image"
import { defaultImage } from "@/constants/default"

export default function BlogCard({
  image,
  categories,
  title,
  slug,
}: HeroCardType) {
  return (
    <Permalink href={`/post/${slug}`} className={style.container}>
      <Repeater<CategoriesTypes>
        items={categories}
        className="flex items-center space-x-2 absolute top-2 left-2"
        renderItem={(item, index) => (
          <div
            key={index}
            className="text-sm font-semibold px-2 py-0.5 bg-primary text-black rounded-lg"
          >
            {item.name}
          </div>
        )}
      />
      <Image
        width={250}
        height={400}
        blurDataURL={defaultImage}
        className="h-full object-cover w-full"
        src={image?.sourceUrl ?? defaultImage}
        alt={image?.altText ?? title}
      />
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full dark:bg-white dark:bg-opacity-10 text-gray-200 flex items-center justify-center">
        <Icon size={16} icon="external" />
      </div>
      <div className="font-bold absolute bottom-4 px-4 text-white">{title}</div>
    </Permalink>
  )
}
