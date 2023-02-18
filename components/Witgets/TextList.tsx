import { PostType } from "@/types/index"
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
    <div className={className}>
      {title && <Title {...title} />}
      <Card>
        <Repeater
          className={"space-y-4"}
          items={items}
          renderItem={renderItem}
          {...(notFound && { renderNotFound: <NotFound {...notFound} /> })}
        />
      </Card>
    </div>
  )
}
