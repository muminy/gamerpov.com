import { CategoryType } from "@/types/site"
import classNames from "classnames"
import Permalink from "../Permalink"

export default function Category({ image, name, slug }: CategoryType) {
  return (
    <Permalink
      href={`/kategori/${slug}`}
      className={classNames(
        "w-[200px] h-[80px] relative",
        "overflow-hidden",
        "group select-none"
      )}
    >
      <img
        src={image.sourceUrl}
        alt={image.title}
        className="absolute left-0 duration-300 group-hover:scale-125 top-0 object-cover w-full h-full z-10"
      />
      <div
        className={classNames(
          "absolute w-full h-full",
          "bg-black bg-opacity-70 duration-300 group-hover:bg-pink-400 group-hover:bg-opacity-100 text-white",
          "flex items-center justify-center z-20",
          "font-black"
        )}
      >
        {name}
      </div>
    </Permalink>
  )
}
