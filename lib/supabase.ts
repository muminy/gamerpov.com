import { createClient } from "@supabase/supabase-js"

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseServerKey: string =
  process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY || ""

const SupabaseAdmin = createClient(supabaseUrl, supabaseServerKey)

const registerView = async (page_slug: string) => {
  return await SupabaseAdmin.rpc("increment_views", {
    page_slug,
  })
}

export { SupabaseAdmin, registerView }
