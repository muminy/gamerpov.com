import Article from "@/components/ArticleCard"
import Container from "@/components/Container"
import Permalink from "@/components/Permalink"
import Repeater from "@/components/Repeater"
import Seo from "@/components/Seo"
import Widgets from "@/components/Widgets"
import { BASE_URL } from "@/constants/website"
import { getPostsByCategoryId } from "@/libs/post"
import { getCategoryBySlug } from "@/libs/site"
import { PostType } from "@/types/post"
import { CategoryType } from "@/types/site"
import { GetStaticPropsContext } from "next"

type PageProps = {
  posts: PostType[]
  category: CategoryType
}

export default function CategoryPost({ posts, category }: PageProps) {
  return (
    <Container>
      <Seo
        title={`${category.name} | Gamerpov`}
        description={category.description}
        image={`${BASE_URL}/api/og/blog?title=${category.name}`}
      />
      <Container size="small">
        <div className="mb-14 mt-6">
          <h1 className="text-2xl text-center font-black uppercase mb-3">
            {category.name}
          </h1>
          <p className="text-sm text-gray-600 text-center">
            {category.description
              ? `${category.description?.substring(0, 200)}...`
              : category.name}
          </p>
        </div>
        <Widgets.TextList
          icon="flash"
          title={`<b>${category.name}</b> Son Paylaşımlar`}
          items={posts}
        />
      </Container>
    </Container>
  )
}

export type ParamsType = {
  slug: string
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { slug } = params as ParamsType
  const { category } = await getCategoryBySlug(slug)

  if (!category) {
    return {
      props: {},
      notFound: true,
    }
  }

  const { posts } = await getPostsByCategoryId({
    categoryId: category.databaseId,
  })

  return {
    props: {
      category,
      posts,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  }
}
