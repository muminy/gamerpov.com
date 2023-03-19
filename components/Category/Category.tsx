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
        "w-full h-[80px] relative",
        "overflow-hidden",
        "group select-none",
        "hover:ring-2 hover:ring-offset-2 rounded-xl hover:ring-gray-300 hover:dark:ring-dark-secondary",
        "hover:dark:ring-offset-dark-bg duration-300"
      )}
    >
      <Image
        src={image?.sourceUrl ?? defaultImage}
        alt={image?.title ?? "no"}
        blurDataURL={defaultImage}
        width={200}
        height={80}
        className="absolute rounded-2xl left-0 duration-300 top-0 object-cover w-full h-full z-10"
      />
      <div
        className={classNames(
          "absolute w-full h-full",
          "bg-black bg-opacity-70 duration-300 group-hover:bg-black group-hover:bg-opacity-80 text-white",
          "flex items-center justify-center z-20",
          "font-black text-center px-4"
        )}
      >
        {name}
      </div>
    </Permalink>
  )
}
