import classNames from "classnames"
import { PostDetailProps } from "."
import PostDetail from "./PostDetail"

export default function PostHeader({
  author,
  image,
  title,
  date,
  slug,
}: PostDetailProps) {
  return (
    <div
      className={classNames(
        "relative",
        "after:absolute after:bg-gradient-to-b after:to-black after:from-transparent",
        "after:w-full after:h-full after:top-0 mb-3 overflow-hidden xl:mx-0 lg:mx-0 -mx-5"
      )}
    >
      <img
        className="object-cover self-center xl:h-[500px] lg:h-[300px] h-[240px] w-full"
        src={image}
        alt={title}
      />
      <div
        className={classNames(
          "absolute right-0 bottom-0 left-0 mx-auto z-10 text-white",
          "xl:px-14 lg:px-8 px-5 w-full xl:py-4 lg:py-4 md:px-8 md:py-4 py-2"
        )}
      >
        <h1
          className={classNames(
            "font-bold xl:text-4xl text-2xl z-10 mb-5",
            "xl:leading-10 lg:leading-6 leading-6 font-kanit"
          )}
        >
          {title}
        </h1>
        <PostDetail date={date} slug={slug} author={author} />
      </div>
    </div>
  )
}
