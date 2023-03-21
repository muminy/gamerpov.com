import Container from "@/components/Container"
import Seo from "@/components/Seo"
import Title from "@/components/Title"
import { BlogList } from "@/components/Witgets"
import { domain } from "@/constants/default"
import { getPostByTag } from "@/services/post"
import { getTagBySlug } from "@/services/tag"
import { PostType, TagType } from "@/types/index"
import { GetStaticPropsContext } from "next"

type TagPageProps = {
  posts: PostType[]
  tag: TagType
}

export default function Tag({ posts, tag }: TagPageProps) {
  return (
    <Container className="pt-10">
      <Seo
        title={tag.name}
        description={`Latest posts in the ${tag.name} Tag.`}
        image={`${domain}/api/og/blog?title=${tag.name}`}
      />
      <Container size="large">
        <BlogList
          repeaterClassName="grid xl:grid-cols-1 grid-cols-2 gap-2 mt-10"
          blogType="DEFAULT"
          items={posts}
          notFound={{
            title: `No articles found for the Tag.`,
          }}
          renderHeader={
            <Title
              description={`Latest posts in the ${tag.name} Tag.`}
              title={`${tag.name}`}
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
  const tag = await getTagBySlug(slug)

  if (!tag) {
    return {
      props: {},
      notFound: true,
    }
  }

  const posts = await getPostByTag(slug)

  return {
    props: {
      tag,
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
