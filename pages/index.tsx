import Container from "@/components/Container"
import Seo from "@/components/Seo"
import Title from "@/components/Title"
import { CategoryList, TextList } from "@/components/Witgets"
import { BlogList } from "@/components/Witgets"
import { initialSeo } from "@/constants/seo"
import { getAllPosts } from "@/services/post"
import { PostType } from "../types"

type HomeStaticProps = {
  hero: PostType[]
  remaining: PostType[]
}

export default function Home({ hero, remaining }: HomeStaticProps) {
  return (
    <Container>
      <Seo {...initialSeo} />
      <CategoryList />
      <BlogList
        repeaterClassName="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 gap-2"
        blogType="IMAGE"
        renderHeader={
          <Title
            description="Articles written during the day are listed here"
            title="Latest Posts"
          />
        }
        className="mb-10"
        items={hero}
      />
      <BlogList
        items={remaining}
        renderHeader={<Title title="Other Posts" />}
        notFound={{
          title: "Not Found",
          description:
            "Articles will be listed here as soon as possible. Please don't forget to follow us",
        }}
        repeaterClassName="grid xl:grid-cols-2 grid-cols-1 gap-5"
      />
    </Container>
  )
}

export async function getStaticProps() {
  const { hero, remaining } = await getAllPosts()

  return {
    props: {
      hero,
      remaining,
    },
    revalidate: 10,
  }
}
