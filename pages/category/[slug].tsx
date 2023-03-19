import Breadcrumb from "@/components/Breadcrumb"
import Container from "@/components/Container"
import Seo from "@/components/Seo"
import Title from "@/components/Title"
import { BlogList } from "@/components/Witgets"
import { domain } from "@/constants/default"
import { getCategoryBySlug } from "@/services/category"
import { getPostCategory } from "@/services/post"
import { CategoryType, PostType } from "@/types/index"
import { GetStaticPropsContext } from "next"

type CategoryPageProps = {
  posts: PostType[]
  category: CategoryType
}

export default function Category({ posts, category }: CategoryPageProps) {
  return (
    <Container className="pt-10">
      <Seo
        title={category.name}
        description={`Latest posts in the ${category.name} Category.`}
        image={`${domain}/api/og/blog?title=${category.name}`}
      />
      <Container size="large">
        <BlogList
          repeaterClassName="grid xl:grid-cols-1 grid-cols-2 gap-2 mt-10"
          blogType="DEFAULT"
          items={posts}
          notFound={{
            title: `No articles found for the category.`,
          }}
          renderHeader={
            <Title
              description={`Latest posts in the ${category.name} category.`}
              title={`${category.name}`}
            />
          }
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
  const category = await getCategoryBySlug(slug)

  if (!category) {
    return {
      props: {},
      notFound: true,
    }
  }

  const posts = await getPostCategory(category.id)

  return {
    props: {
      category,
      posts,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  }
}
