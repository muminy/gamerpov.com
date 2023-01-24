import { CategoryType } from "@/types/site"
import classNames from "classnames"
import Permalink from "../Permalink"

export default function Category({ image, name, slug }: CategoryType) {
  return (
    <Permalink
      href={`/category/${slug}`}
      className={classNames(
        "w-[210px] h-[290px] relative block",
        "overflow-hidden",
        "group select-none rounded-md"
      )}
    >
      <img
        src={image.sourceUrl}
        alt={image.title}
        className="absolute left-0 duration-300 group-hover:scale-105 top-0 object-cover w-full h-full"
      />
      <div
        className={classNames(
          "absolute w-full h-full",
          "bg-black bg-opacity-50 duration-300 text-white",
          "flex items-center justify-center z-20 px-4",
          "font-black uppercase text-2xl text-center"
        )}
      >
        {name}
      </div>
    </Permalink>
  )
}
