import Container from "@/components/Container"
import Hero from "@/components/Hero"
import Widgets from "@/components/Widgets"
import { getAllPosts } from "@/services/post"
import { PostType } from "@/types/index"
import { useRouter } from "next/router"

export type PropList = "posts" | "hero" | "right" | "left"
export type HomeProps = Record<PropList, PostType[]>

export default function Home({ posts, left, right, hero }: HomeProps) {
  const { push } = useRouter()
  return (
    <Container>
      <Hero.HomeHero items={hero} />
      <Widgets.Category />
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
  const posts = await getAllPosts()

  // pinned post list
  const hero = posts.filter((item) => item.pinned).slice(0, 4)

  const leftSidebarCategoryId = 16
  const rightSidebarCategoryId = 1

  return {
    props: {
      posts,
      hero,
      left: posts.filter((item) =>
        item.categories
          .map((item) => item.id)
          .includes(leftSidebarCategoryId)
      ),
      right: posts.filter((item) =>
        item.categories
          .map((item) => item.id)
          .includes(rightSidebarCategoryId)
      ),
    },
    revalidate: 10,
  }
}
