import Permalink from "../Permalink"
import Icon from "../Icon"
import style from "./style.module.css"
import { HeroCardType } from "."

export default function BlogCard({ image, title, slug }: HeroCardType) {
  return (
    <Permalink href={`/post/${slug}`} className={style.container}>
      <img className="h-full object-cover w-full" src={image?.sourceUrl} />
      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white bg-opacity-25 text-white flex items-center justify-center">
        <Icon size={16} icon="external" />
      </div>
      <div className="font-bold text-3xl absolute top-4 px-4 text-white">
        {title}
      </div>
    </Permalink>
  )
}
