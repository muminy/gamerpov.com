import ArticleCard from "@/components/ArticleCard"
import Container from "@/components/Container"
import Hero from "@/components/Hero"
import Repeater from "@/components/Repeater"
import Title from "@/components/Title"
import Widgets from "@/components/Widgets"
import { getAllPosts, getPostsByCategoryId } from "@/libs/post"
import { PostType } from "@/types/post"
import { useRouter } from "next/router"

type HomeProps = {
  posts: PostType[]
  left: PostType[]
  right: PostType[]
}

export default function Home({ posts, left, right }: HomeProps) {
  const { push } = useRouter()
  return (
    <Container>
      <Hero.HomeHero items={posts.slice(0, 4)} />
      <div className="grid grid-cols-12 xl:gap-10 gap-5 mt-10">
        <div className="xl:col-span-3 lg:col-span-4 col-span-12">
          <Widgets.TextList
            onClick={() => push(`/category/fifa`)}
            items={left}
            title="Fifa"
            icon="flash"
          />
        </div>
        <div className="xl:col-span-6 lg:col-span-4 col-span-12">
          <Widgets.TextList
            icon="flash"
            title="Latest articles"
            items={posts}
          />
        </div>
        <div className="xl:col-span-3 lg:col-span-4 col-span-12">
          <Widgets.TextList
            onClick={() => push(`/category/valorant`)}
            items={right}
            title="Valorant"
            icon="valorant"
          />
        </div>
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const { posts, left, right } = await getAllPosts()

  return {
    props: {
      posts,
      left,
      right,
    },
    revalidate: 10,
  }
}
