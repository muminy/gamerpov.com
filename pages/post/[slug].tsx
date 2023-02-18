import Breadcrumb from "@/components/Breadcrumb"
import Comments from "@/components/Comment"
import Container from "@/components/Container"
import PostHeader from "@/components/PostHeader"
import Repeater from "@/components/Repeater"
import Seo from "@/components/Seo"
import Tag from "@/components/Tag"
import Title from "@/components/Title"
import { Share } from "@/components/Witgets"
import { removeHtmlTags } from "@/helpers/utils"
import { getPostBySlug, getAllPosts } from "@/services/post"
import { CategoryType, PostType } from "@/types/index"
import { GetStaticPropsContext } from "next"
import { useEffect } from "react"

type PostDetailProps = {
  post: PostType
}

export default function Detail({ post }: PostDetailProps) {
  useEffect(() => {
    fetch(`/api/views/${post.slug}`, { method: "POST" })
  }, [post.slug])

  const renderItem = (item: CategoryType, index: number) => {
    return (
      <Tag key={index} slug={item.slug} text={item.name} className="h-9" />
    )
  }

  return (
    <Container size="xlarge">
      <Seo
        title={post.title}
        description={removeHtmlTags(post.excerpt)}
        image={post.image.sourceUrl}
      />
      <Breadcrumb
        items={[
          { title: "Home", to: "/" },
          {
            title: post.categories[0].name ?? "Post",
            to: `/category/${post.categories[0].slug}`,
          },
          {
            title: post.title,
          },
        ]}
      />
      <PostHeader
        author={post.author.name}
        date={post.date}
        slug={post.slug}
        image={post.image.sourceUrl}
        title={post.title}
      />
      <Container size="large">
        <Repeater<CategoryType>
          items={post.categories}
          renderItem={renderItem}
          className="flex space-x-2 mb-3"
        />
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <Share text={post.title} />
        <Comments
          className="mt-10"
          postId={post.postId}
          items={post.comments}
        />
      </Container>
    </Container>
  )
}

export type ParamsType = {
  slug: string
}

export async function getStaticProps(props: GetStaticPropsContext) {
  const { slug } = props.params as ParamsType
  const post = await getPostBySlug(slug)

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
