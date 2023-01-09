import ArticleCard, { ArticleCardProps } from "@/components/ArticleCard"
import Carousel from "@/components/Carousel"
import Container from "@/components/Container"
import GameCard, { GameProps } from "@/components/GameCard"
import Hero from "@/components/Hero"
import Repeater from "@/components/Repeater"
import Title from "@/components/Title"
import { getAllPosts } from "@/libs/post"
import { PostType } from "@/types/post"
import { BlogMock } from "mocks/blogs"
import { GameMock } from "mocks/games"

export default function Home({ posts }: { posts: PostType[] }) {
  return (
    <div>
      <Container>
        <Hero.HomeHero items={posts} />

        <Repeater<ArticleCardProps>
          items={BlogMock.slice(0, 5)}
          renderHeader={() => <Title title="Popüler Bloglar" />}
          className="grid grid-cols-12 gap-5"
          renderItem={(item, index) => (
            <div key={index} className="xl:col-span-3 lg:col-span-4 col-span-6">
              <ArticleCard.Image {...item} />
            </div>
          )}
        />

        <Title title="Oyunlar" />
        <Carousel<GameProps>
          items={GameMock}
          className="flex"
          renderItem={(item, index) => <GameCard key={index} {...item} />}
        />
      </Container>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts.posts,
    },
  }
}
