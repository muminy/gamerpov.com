import { TagListProps } from "."
import NotFound from "../NotFound"
import Repeater from "../Repeater"
import Tag from "../Tag"
import Title from "../Title"

export default function TagList({ tags }: TagListProps) {
  return (
    <Repeater
      renderHeader={<Title title="Tags" />}
      items={tags}
      className="flex flex-wrap"
      renderItem={(item, key) => (
        <Tag
          href={`/tag/${item.slug}`}
          className="mb-2 mr-2"
          key={key}
          text={item.name}
        />
      )}
      renderNotFound={<NotFound title="Tag Not Founded" />}
    />
  )
}
