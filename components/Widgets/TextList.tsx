import { PostType } from "@/types/post"
import moment from "moment"
import { Fragment } from "react"
import { TextListProps } from "."
import Article from "../ArticleCard"
import Repeater from "../Repeater"
import Title from "../Title"

export default function TextList({ items, title, icon }: TextListProps) {
  return (
    <Fragment>
      {title && <Title icon={icon} title={title} />}
      <div className="px-4 py-4 bg-gray-100 dark:bg-dark-secondary rounded-xl">
        {items.length === 0 ? (
          <div>Henüz Paylaşım Yapılmadı</div>
        ) : (
          <Repeater<PostType>
            items={items}
            className="space-y-5"
            renderItem={(item, index) => <Article.Text key={index} {...item} />}
          />
        )}
      </div>
    </Fragment>
  )
}
