import { CommentType } from "@/types/comment"
import ContentCard from "../Card"

export default function Card({ author, content }: CommentType) {
  return (
    <ContentCard className="text-sm">
      <div className="text-blue-500">{author.name}</div>
      <span
        className="dark:text-gray-300 text-gray-600"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </ContentCard>
  )
}
