import { DetailProps } from "."

export default function Detail({ content }: DetailProps) {
  return (
    <div className="article-content">
      <h1>Açıklama</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
