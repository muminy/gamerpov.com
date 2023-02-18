import Logo from "@/components/Logo"
import { ImageResponse } from "@vercel/og"
import { NextRequest } from "next/server"

export const config = {
  runtime: "experimental-edge",
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
          fontFamily: "Inter",
          background:
            "linear-gradient(225deg, #FCFF7D 0%, #2B3EEF 32.29%, #FF7D7D 56.25%, #BD00FF 76.56%, #0085FF 100%)",
        }}
      >
        <div tw="p-5 flex flex-col w-full h-full justify-between text-white pt-14 pl-14">
          <Logo size={60} />
          <div tw="text-5xl rounded-xl w-full font-bold leading-[70px]">
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
