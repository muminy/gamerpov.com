import Permalink from "../Permalink"
import Icon from "../Icon"
import style from "./style.module.css"
import { HeroCardType } from "."
import Repeater from "../Repeater"
import { CategoryType } from "@/types/index"
import Image from "next/image"
import { defaultImage } from "@/constants/default"
import Badge from "../Badge"
import classNames from "classnames"

export default function BlogCard({
  image,
  categories,
  title,
  slug,
  className,
}: HeroCardType) {
  const renderCategory = (item: CategoryType, i: number) => (
    <Badge
      key={i}
      className="text-sm font-semibold px-2 py-0.5 bg-primary text-black rounded-lg"
      text={item.name}
    />
  )

  return (
    <Permalink
      href={`/post/${slug}`}
      className={classNames(style.container, className)}
    >
      <Repeater<CategoryType>
        items={categories}
        className="flex items-center space-x-2 absolute top-2 left-2"
        renderItem={renderCategory}
      />
      <Image
        width={250}
        height={400}
        blurDataURL={defaultImage}
        className="h-full object-cover w-full"
        src={image?.sourceUrl ?? defaultImage}
        alt={image?.title ?? title}
      />
      <div className="absolute top-2 right-2 w-10 h-10 rounded-full bg-white bg-opacity-25 dark:bg-white dark:bg-opacity-10 text-gray-200 flex items-center justify-center">
        <Icon size={16} icon="pin" />
      </div>
      <div className="font-bold absolute bottom-4 px-4 text-white">
        {title}
      </div>
    </Permalink>
  )
}
