import { PostType } from "@/types/post"
import { TextListProps } from "."
import Article from "../ArticleCard"
import Card from "../Card"
import Icon from "../Icon"
import Repeater from "../Repeater"
import Title from "../Title"

export default function TextList({
  items,
  title,
  icon,
  moreText,
  onClick,
}: TextListProps) {
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
            renderBottom={
              onClick && (
                <button
                  onClick={onClick}
                  className="text-blue-500 text-sm text-center w-full flex items-center space-x-2"
                >
                  <span>{moreText ?? "Read More"}</span>
                  <Icon size={14} icon="arrowRight" />
                </button>
              )
            }
          />
        )}
      </Card>
    </div>
  )
}
