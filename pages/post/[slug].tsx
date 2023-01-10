import { getAllPosts, getPostBySlug } from "@/libs/post"
import { PostType } from "@/types/post"
import { GetStaticPropsContext } from "next"
import Container from "@/components/Container"
import Seo from "@/components/Seo"
import { BASE_URL } from "@/constants/website"

export interface PostDetailProps {
  post: PostType
}
export default function PostDetail({ post }: PostDetailProps) {
  return (
    <Container className="relative">
      <Seo
        title={post.title}
        description={post.excerpt}
        image={`${BASE_URL}/api/og/blog?title=${post.title}`}
        twitter={{ site: "@gamewod", cardType: "summary_large_image" }}
      />

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-3 w-full bg-gray-200 h-full rounded-lg hidden xl:block lg:block" />
        <div className="xl:col-span-6 lg:col-span-6 col-span-12">
          <Container size="large">
            <div className="mb-10">
              <img
                className="h-[300px] w-full object-cover"
                src={post.image?.sourceUrl}
                alt={post.image?.altText}
              />
            </div>
            <div className="text-3xl uppercase font-black mb-10">
              {post.title}
            </div>

            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
            />
          </Container>
        </div>
        <div className="col-span-3 w-full bg-gray-200 h-full rounded-lg hidden xl:block lg:block" />
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

  if (!post) {
    return {
      props: {},
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  // Only render the most recent posts to avoid spending unecessary time
  // querying every single post from WordPress

  // Tip: this can be customized to use data or analytitcs to determine the
  // most popular posts and render those instead

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
