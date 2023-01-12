import Logo from "@/components/Logo"
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
          backgroundImage:
            "linear-gradient(225.1deg, #00FFA3 1.42%, #3045FF 56.31%, #00FFA3 112.36%)",
          fontFamily: "Inter",
        }}
      >
        <div tw="p-10 flex flex-col h-full justify-between">
          <Logo size={73} color="white" />
          <div tw="text-6xl text-black font-black uppercase leading-[70px]">
            {title}
          </div>
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
