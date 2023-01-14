import { getAllPosts, getPostBySlug, getPostsByCategoryId } from "@/libs/post"
import { CategoriesTypes, PostType } from "@/types/post"
import { GetStaticPropsContext } from "next"
import Container from "@/components/Container"
import Seo from "@/components/Seo"
import { BASE_URL } from "@/constants/website"
import Widgets from "@/components/Widgets"
import { defaultImage } from "@/constants/default"
import Image from "next/image"
import Breadcrumb from "@/components/Breadcrumb"
import Repeater from "@/components/Repeater"
import Permalink from "@/components/Permalink"

export interface PostDetailProps {
  post: PostType
  mostPopularPosts: PostType[]
}
export default function PostDetail({
  post,
  mostPopularPosts,
}: PostDetailProps) {
  return (
    <Container className="relative">
      <Seo
        title={post.title}
        description={post.excerpt}
        image={`${BASE_URL}/api/og/blog?title=${post.title}`}
        twitter={{ site: "@gamewod", cardType: "summary_large_image" }}
      />
      <Breadcrumb
        items={[
          { title: "Home", to: "/" },
          { title: "Blog", to: "/" },
          { title: post.title },
        ]}
      />
      <div className="grid grid-cols-12 xl:gap-10 gap-5">
        <div className="col-span-3 w-full h-full rounded-lg hidden xl:block lg:block">
          <Widgets.Author
            name={post.author?.name}
            description={post.author?.description}
          />
          <Widgets.Share />
        </div>
        <div className="xl:col-span-6 lg:col-span-6 col-span-12">
          <Container size="large">
            <h1 className="text-3xl font-black mb-4">{post.title}</h1>
            <div className="flex items-center mb-10 space-x-2 font-medium text-sm dark:text-gray-300 text-gray-900">
              <Repeater<CategoriesTypes>
                items={post.categories}
                className="space-x-2"
                renderItem={(item, index) => (
                  <Permalink
                    key={index}
                    href={`/category/${item.slug}`}
                    title={item.name}
                    className="px-3 py-1.5 rounded-xl dark:bg-dark-secondary bg-yellow-100"
                  />
                )}
              />
              <span>{post.readingTime} Min Read</span>
            </div>
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
            />
          </Container>
        </div>
        <div className="col-span-3 w-full h-full rounded-lg hidden xl:block lg:block">
          <Widgets.TextList
            icon="flash"
            title="Most Popular"
            items={mostPopularPosts}
          />
        </div>
      </div>
    </Container>
  )
}

export type ParamsType = {
  slug: string
}

export async function getStaticProps(props: GetStaticPropsContext) {
  const { slug } = props.params as ParamsType
  const { post } = await getPostBySlug(slug)
  const { posts: mostPopularPosts } = await getPostsByCategoryId({
    categoryId: 16,
  })

  if (!post) {
    return {
      props: {},
      notFound: true,
    }
  }

  return {
    props: {
      post,
      mostPopularPosts,
    },
  }
}

export async function getStaticPaths() {
  const { posts } = await getAllPosts()

  const paths = posts
    .filter(({ slug }) => typeof slug === "string")
    .map(({ slug }) => ({
      params: {
        slug,
      },
    }))

  return {
    paths,
    fallback: "blocking",
  }
}
