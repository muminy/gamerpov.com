import { NextApiRequest, NextApiResponse } from "next"
import { registerView, SupabaseAdmin } from "@/lib/supabase"
import { domain } from "@/constants/default"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const postSlug = req.query.slug as string

  if (!postSlug) {
    return res.status(404).json({
      message: "Slug Required",
    })
  }

  if (req.method === "POST") {
    await registerView(`${domain}${postSlug}`)
    return res.status(200).json({
      message: `Successfully incremented page: ${postSlug}`,
    })
  }

  if (req.method === "GET") {
    const { data } = await SupabaseAdmin.from("views")
      .select("views")
      .filter("slug", "eq", `${domain}${postSlug}`)

    if (data && data.length > 0) {
      return res.status(200).json({
        total: data[0].views,
      })
    } else {
      return res.status(200).json({
        total: 1,
      })
    }
  }

  return res.status(400).json({
    message: "Unsupported Request",
  })
}
