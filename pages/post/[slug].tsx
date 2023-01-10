import { getAllPosts, getPostBySlug } from "@/libs/post"
import { PostType } from "@/types/post"
import { GetStaticPropsContext } from "next"
import Container from "@/components/Container"
import Permalink from "@/components/Permalink"
import Seo from "@/components/Seo"

export interface PostDetailProps {
  post: PostType
}
export default function PostDetail({ post }: PostDetailProps) {
  return (
    <Container className="xl:mt-0 lg:mt-0 -mt-10">
      <Seo
        title="Architectural Engineering Wonders of the modern era for your Inspiration"
        description="dENEME"
        twitter={{ site: "@muminy" }}
      />
      <Container size="small">
        <div className="text-4xl text-center font-semibold mb-4">
          Architectural Engineering Wonders of the modern era for your
          Inspiration
        </div>

        <div className="flex items-center justify-center text-sm text-gray-400 font-medium mb-6 space-x-2">
          <div>8 Mins Read</div>
          <Permalink className="text-blue-500" href={"/"}>
            Gamewod.com
          </Permalink>
        </div>
      </Container>

      <Container size="large" className="mb-10">
        <img
          className="rounded-xl"
          src="https://vjy.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworkspace.34be1ecc.jpg&w=2048&q=75"
        />
      </Container>

      <Container size="small" className="article-content">
        <p>
          Reinvention often comes in spurts, after a long period of silence.
          Just as modern architecture recently enjoyed a comeback, brand
          architecture, a field with well-established principles for decades, is
          back in the limelight.
        </p>

        <h1>Current</h1>

        <p>
          Simply understood, brand architecture is the art and science of
          structuring the portfolio to meet your strategic goals, defining the
          brand number, scope, and relationships needed to compete. Just as
          Modern Architecture prioritized function, a Brand Architecture is only
          as good as it is well-suited for the purpose it strives to achieve.
          Given the disruption observed today across industries and segments,
          it’s no wonder that companies are considering structural rather than
          topical solutions to the challenges they face.
        </p>

        <p>
          Yet the context in which brand architecture decisions are being made
          has changed. Gone are the days of “competitive strategy”, with the
          military-inspired view of competition as a zero-sum game, where market
          share needs to be stolen from competitors, often in a street-by-street
          battle to win over each individual segment. The type of brand
          architecture required to win in this game demanded a dogged focus on
          each segment, and a sniper-like collection of individual brands
          sharply focused on each one. While there was always a place for a
          variety of architectures — see Joachimsthaler’s brand relationship
          spectrum — houses of brands were favored, as it enabled
          segment-by-segment competition and risk protection. P&G was the king
          of houses of brands, slicing and dicing the market not just by
          products and demographics, but also by psychographics, price range,
          buying patterns or attitudes. In B2B, houses of brands were
          omnipresent, with a product-driven logic that led to branding new
          features meant to provide short-term competitive advantage.
        </p>

        <h1>Houses of brands</h1>

        <p>
          In today’s day and age, companies like Google or Amazon do not pursue
          growth through incremental market share gains; rather, they focus on
          understanding their customers’ needs and creating entirely new markets
          to answer them. Creating a house of brands for these markets would be
          folly — not only would each brand need to be created from scratch,
          increasing the already significant investment, but the new category
          itself often needs to be explained to consumers, compounding the cost.
        </p>
      </Container>
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

  const posts = await getAllPosts()

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
