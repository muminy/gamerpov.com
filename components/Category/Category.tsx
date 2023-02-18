import { defaultImage } from "@/constants/default"
import { CategoryType } from "@/types/index"
import classNames from "classnames"
import Image from "next/image"
import Permalink from "../Permalink"

export default function Category({ image, name, slug }: CategoryType) {
  return (
    <Permalink
      href={`/category/${slug}`}
      className={classNames(
        "w-[200px] h-[80px] relative",
        "overflow-hidden",
        "group select-none"
      )}
    >
      <Image
        src={image?.sourceUrl ?? defaultImage}
        alt={image?.title ?? "no"}
        blurDataURL={defaultImage}
        width={200}
        height={80}
        className="absolute left-0 duration-300 group-hover:scale-125 top-0 object-cover w-full h-full z-10"
      />
      <div
        className={classNames(
          "absolute w-full h-full",
          "bg-black bg-opacity-70 duration-300 group-hover:bg-primary group-hover:bg-opacity-100 text-white",
          "flex items-center justify-center z-20",
          "font-black"
        )}
      >
        {name}
      </div>
    </Permalink>
  )
}
