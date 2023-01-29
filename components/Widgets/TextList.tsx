import { PostType } from "@/types/index"
import classNames from "classnames"
import { TextListProps } from "."
import Article from "../ArticleCard"
import Card from "../Card"
import Icon from "../Icon"
import NotFound from "../NotFound"
import Repeater from "../Repeater"
import Title from "../Title"

export default function TextList({
  items,
  title,
  icon,
  moreText,
  onClick,
  className,
}: TextListProps) {
  return (
    <>
      {title && <Title icon={icon} title={title} />}
      <Card className={classNames(className)}>
        <Repeater<PostType>
          items={items}
          className="space-y-5"
          renderItem={(item, index) => (
            <Article.Text key={index} {...item} />
          )}
          renderNotFound={<NotFound title="Not found posts" />}
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
      </Card>
    </>
  )
}
