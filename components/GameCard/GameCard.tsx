import { defaultImage } from "@/constants/default"
import Image from "next/image"
import { GameProps } from "."
import Permalink from "../Permalink"

export default function GameCard({ image, title }: GameProps) {
  return (
    <Permalink
      href={"/"}
      className="flex relative items-center justify-center min-w-[210px] h-[310px] scroll-ml-6 snap-start"
    >
      <Image
        width={200}
        height={190}
        blurDataURL={defaultImage}
        className="w-full h-full rounded-md"
        src={image}
        alt={title}
      />
      <div className="absolute font-black text-white text-3xl">{title}</div>
    </Permalink>
  )
}
