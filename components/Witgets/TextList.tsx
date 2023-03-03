import { PostType } from "@/types/index"
import classNames from "classnames"
import { TextListProps } from "."
import Card from "../Card"
import NotFound from "../NotFound"
import Repeater from "../Repeater"
import TextCard from "../TextCard"
import Title from "../Title"

export default function TextList({
  className,
  items,
  title,
  notFound,
}: TextListProps) {
  const renderItem = (item: PostType, index: number) => {
    return <TextCard {...item} key={index} />
  }

  return (
    <div className={classNames(className, "flex flex-col")}>
      <Repeater
        className={"space-y-2"}
        items={items}
        renderItem={renderItem}
        {...(title && { renderHeader: <Title {...title} /> })}
        {...(notFound && { renderNotFound: <NotFound {...notFound} /> })}
      />
    </div>
  )
}
