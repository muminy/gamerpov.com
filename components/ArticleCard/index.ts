import TextCard from "./Text"
import ImageCard from "./ArticleCard"

export type ArticleCardProps = {
  title: string
  image: string
}

const Article = {
  Text: TextCard,
  Image: ImageCard,
}

export default Article
