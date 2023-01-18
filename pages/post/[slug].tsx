import { getAllPosts, getPostBySlug, getPostsByCategoryId } from "@/libs/post"
import { CategoriesTypes, PostType } from "@/types/post"
import { GetStaticPropsContext } from "next"
import Container from "@/components/Container"
import Seo from "@/components/Seo"
import { BASE_URL } from "@/constants/website"
import Widgets from "@/components/Widgets"
import Breadcrumb from "@/components/Breadcrumb"
import Repeater from "@/components/Repeater"
import Permalink from "@/components/Permalink"
import { useRouter } from "next/router"
import Comment from "@/components/Comment"

export interface PostDetailProps {
  post: PostType
  mostPopularPosts: PostType[]
}
export default function PostDetail({
  post,
  mostPopularPosts,
}: PostDetailProps) {
  const router = useRouter()

  const readMoreClick = () => {
    router.push(`/category/${post.categories[0].slug}`)
  }

  return (
    <Container size="big" className="relative">
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
      <div className="grid grid-cols-12 xl:gap-20 lg:gap-10 gap-5">
        <div className="col-span-3 w-full h-full rounded-lg hidden xl:block">
          <Widgets.Author
            name={post.author?.name}
            description={post.author?.description}
          />
          <Widgets.Share text={post.title} />
          <Widgets.TextList
            icon="flash"
            title="Most Popular"
            items={mostPopularPosts.slice(0, 5)}
            {...(mostPopularPosts.length && { onClick: readMoreClick })}
          />
        </div>
        <div className="xl:col-span-6 col-span-12">
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
        <Comment
          items={post.comments}
          postId={post.postId}
          className="xl:col-span-3 col-span-12 h-full rounded-lg"
        />
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

  let mostPopularPosts

  if (post && post.categories.length > 0) {
    const categoryPosts = await getPostsByCategoryId({
      categoryId: post.categories[0].categoryId,
    })
    mostPopularPosts = categoryPosts.posts.filter(
      (item) => item.slug !== post.slug
    )
  }

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
    revalidate: 10,
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
