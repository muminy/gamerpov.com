import { ImageResponse } from "@vercel/og"

export const config = {
  runtime: "experimental-edge",
}

const font = fetch(
  new URL("../../../assets/fonts/Inter-Black.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler() {
  const fontData = await font

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Inter",
          background:
            "linear-gradient(225deg, #FCFF7D 0%, #2B3EEF 32.29%, #FF7D7D 56.25%, #BD00FF 76.56%, #0085FF 100%)",
        }}
      >
        <div tw="flex text-white text-6xl font-black uppercase leading-[70px]">
          GÜNLÜKTARİF
        </div>
        <div tw="bg-gray-200 rounded-xl px-2 py-1.5">.com</div>
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
