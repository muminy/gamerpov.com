import Breadcrumb from "@/components/Breadcrumb"
import Comments from "@/components/Comment"
import Container from "@/components/Container"
import PostHeader from "@/components/PostHeader"
import Repeater from "@/components/Repeater"
import Seo from "@/components/Seo"
import Tag from "@/components/Tag"
import { TextList } from "@/components/Witgets"
import { removeHtmlTags } from "@/helpers/utils"
import {
  getPostBySlug,
  getAllPosts,
  getPostCategory,
} from "@/services/post"
import { CategoryType, PostType } from "@/types/index"
import { GetStaticPropsContext } from "next"
import { useEffect } from "react"

type PostDetailProps = {
  post: PostType
  similarPosts: PostType[]
}

export default function Detail({ post, similarPosts }: PostDetailProps) {
  useEffect(() => {
    fetch(`/api/views/${post.slug}`, { method: "POST" })
  }, [post.slug])

  const renderItem = (item: CategoryType, index: number) => {
    return (
      <Tag key={index} slug={item.slug} text={item.name} className="h-9" />
    )
  }

  return (
    <Container
      className="grid grid-cols-10 xl:gap-x-10 gap-x-0 py-10"
      size="big"
    >
      <Seo
        title={post.title}
        description={removeHtmlTags(post.excerpt)}
        image={post.image.sourceUrl}
        date={post.date}
      />
      <TextList
        notFound={{
          title: "Not Found",
          description: "We are working!",
        }}
        className="xl:block hidden col-span-2"
        items={similarPosts}
        title={{
          title: "Similar Posts",
          description: `Total ${similarPosts.length} similar posts found`,
        }}
      />
      <div className="xl:col-span-8 col-span-10">
        <Breadcrumb
          items={[{ title: "Anasayfa", to: "/" }, { title: post.title }]}
        />
        <PostHeader
          author={post.author.name}
          date={post.date}
          image={post.image.sourceUrl}
          title={post.title}
          slug={post.slug}
        />
        <Repeater<CategoryType>
          items={post.categories}
          renderItem={renderItem}
          className="flex space-x-2 mb-3"
        />
        <div className="grid grid-cols-12 xl:gap-x-20 gap-x-0 gap-y-10">
          <div
            className="article-content xl:col-span-8 col-span-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <Comments
            items={post.comments}
            postId={post.postId}
            className="xl:col-span-4 col-span-12 w-full"
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
  const post = await getPostBySlug(slug)

  let similarPosts

  if (post && post.categories.length) {
    similarPosts = await getPostCategory(post.categories[0].id)
    similarPosts = similarPosts.filter(
      (item) => item.postId !== post.postId
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
      similarPosts,
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const { hero, remaining } = await getAllPosts()

  const paths = hero
    .concat(remaining)
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
