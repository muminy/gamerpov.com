import { PostType } from "@/types/post"
import { TextListProps } from "."
import Article from "../ArticleCard"
import Card from "../Card"
import Repeater from "../Repeater"
import Title from "../Title"

export default function TextList({ items, title, icon }: TextListProps) {
  return (
    <div className="mb-10">
      {title && <Title icon={icon} title={title} />}
      <Card>
        {items.length === 0 ? (
          <div>Henüz Paylaşım Yapılmadı</div>
        ) : (
          <Repeater<PostType>
            items={items}
            className="space-y-5"
            renderItem={(item, index) => <Article.Text key={index} {...item} />}
          />
        )}
      </Card>
    </div>
  )
}
