import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const config = {
  runtime: "edge",
}

const font = fetch(
  new URL("../../../assets/fonts/Inter-Black.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const fontData = await font

  const hasTitle = searchParams.has("title")
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "My default title"

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white",
          fontFamily: "Inter",
        }}
      >
        <div tw="flex items-center uppercase text-3xl space-x-4 p-10">
          <div tw="flex w-20 h-14 font-black bg-slate-900 text-blue-100 items-center justify-center">
            G
          </div>
          <div tw="flex items-center tracking-wider ml-4">
            <span tw="font-black">GAMER</span>
            <span tw="font-black text-indigo-500">pov</span>
          </div>
        </div>
        <div tw="p-10 text-6xl font-black uppercase leading-[70px]">
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    }
  )
}
