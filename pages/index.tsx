import ArticleCard from "@/components/ArticleCard"
import Container from "@/components/Container"
import Hero from "@/components/Hero"
import Repeater from "@/components/Repeater"
import Title from "@/components/Title"
import { getAllPosts } from "@/libs/post"
import { PostType } from "@/types/post"

export default function Home({
  posts,
  left,
}: {
  posts: PostType[]
  left: PostType[]
}) {
  return (
    <Container>
      <Hero.HomeHero items={posts} />
      <div className="grid grid-cols-12 gap-10 mt-10">
        <div className="xl:col-span-3 lg:col-span-4 col-span-12">
          <Title icon="menu" title="Fifa" />
          <Repeater<PostType>
            items={left}
            className="border-b"
            renderItem={(item, index) => (
              <ArticleCard.Text key={index} {...item} />
            )}
          />
        </div>
        <div className="xl:col-span-6 lg:col-span-4 col-span-12">
          <Title icon="flash" title="Oyunlar" />
          <Repeater<PostType>
            items={posts.slice(0, 1)}
            renderItem={(item, index) => (
              <ArticleCard.Image key={index} {...item} />
            )}
          />
        </div>
        <div className="xl:col-span-3 lg:col-span-4 col-span-12">
          <Title icon="menu" title="Haber Kaynağı" />
          <Repeater<PostType>
            items={posts}
            renderItem={(item, index) => (
              <ArticleCard.Text key={index} {...item} />
            )}
          />
        </div>
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const { posts, left } = await getAllPosts()

  return {
    props: {
      posts,
      left,
    },
  }
}
