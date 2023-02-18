import { PostType } from "@/types/index"
import { BlogListProps } from "."
import Blog from "../Blog"
import NotFound from "../NotFound"
import Repeater from "../Repeater"
import Title from "../Title"

export default function BlogList({
  className,
  repeaterClassName,
  blogType = "DEFAULT",
  items,
  renderHeader,
  notFound,
}: BlogListProps) {
  const renderItem = (item: PostType, index: number) => {
    return <Blog type={blogType} {...item} key={index} />
  }

  return (
    <div className={className}>
      <Repeater<PostType>
        renderHeader={renderHeader}
        className={repeaterClassName}
        items={items}
        renderItem={renderItem}
        renderNotFound={notFound && <NotFound {...notFound} />}
      />
    </div>
  )
}
