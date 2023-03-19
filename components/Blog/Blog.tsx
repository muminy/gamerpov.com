import classNames from "classnames"
import { BlogType } from "."
import { Fragment } from "react"
import Permalink from "../Permalink"
import Image from "next/image"
import { defaultImage } from "@/constants/default"
import { getDate } from "@/helpers/utils"
import style from "./blog.module.css"
import Card from "../Card"

export default function Blog({
  image,
  title,
  type = "DEFAULT",
  slug,
  date,
}: BlogType) {
  const imageProps = {
    src: image.sourceUrl,
    alt: image.title,
    width: 200,
    height: 300,
    blurDataURL: defaultImage,
  }
  const ImageContent = () => (
    <Fragment>
      <Image
        {...imageProps}
        placeholder="blur"
        className={classNames(
          "absolute left-0 top-0 w-full h-full duration-300",
          "object-cover"
        )}
      />
      <div
        className={classNames(
          "absolute w-full h-full",
          "bg-gray-900 bg-opacity-50 px-4 py-3",
          "flex flex-col justify-end"
        )}
      >
        <div className="text-white font-black text-xl">{title}</div>
        <div className="text-white dark:text-white text-sm">
          {getDate(date)}
        </div>
      </div>
    </Fragment>
  )

  const DefaultContent = () => (
    <Card
      className={classNames(
        "duration-200 flex px-6 py-8",
        "h-full flex flex-col justify-center overflow-hidden"
      )}
    >
      <div className={style.defaultCard}>
        <h2 className="font-bold maxline">{title}</h2>
        <div className="text-sm text-gray-500">{getDate(date)}</div>
      </div>
      <div
        style={{ backgroundImage: `url(${image.sourceUrl})` }}
        className={style.blogDefault}
      />
    </Card>
  )

  const renderContent = () => {
    switch (type) {
      case "IMAGE":
        return <ImageContent />
      case "DEFAULT":
      default:
        return <DefaultContent />
    }
  }

  return (
    <Permalink
      href={`/post/${slug}`}
      className={classNames(
        "w-full relative duration-300",
        "group block rounded-xl hover:dark:ring-offset-dark-bg",
        "hover:ring-2 hover:ring-offset-4 rounded-xl hover:ring-gray-300 hover:dark:ring-dark-secondary",
        {
          "h-[200px] flex items-center justify-center overflow-hidden":
            type === "IMAGE",
        }
      )}
    >
      {renderContent()}
    </Permalink>
  )
}
