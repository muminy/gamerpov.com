import { domain } from "@/constants/default"
import { getAllPosts } from "@/services/post"
import { GetServerSidePropsContext } from "next"
import { PostType } from "../types"
import dayjs from "dayjs"

function generateSiteMap({ posts }: { posts: PostType[] }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${domain}</loc>
       <lastmod>2023-01-03</lastmod>
     </url>
     ${posts
       .map(({ slug, date }) => {
         return `
       <url>
           <loc>${`${domain}/post/${slug}`}</loc>
           <lastmod>${dayjs(date).format("YYYY-MM-DD")}</lastmod>
       </url>
     `
       })
       .join("")}
   </urlset>
 `
}

function SiteMap() {}

export async function getServerSideProps({
  res,
}: GetServerSidePropsContext) {
  const { hero, remaining } = await getAllPosts()

  const sitemap = generateSiteMap({ posts: hero.concat(remaining) })

  res.setHeader("Content-Type", "text/xml")
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default SiteMap
