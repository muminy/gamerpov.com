import Text from "./Text"
import ImageCard from "./ArticleCard"

export type ArticleCardProps = {
  title: string
  image: string
}

const Article = {
  Text,
  Image: ImageCard,
}

export default Article
