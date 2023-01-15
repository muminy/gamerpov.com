import classNames from "classnames"
import { useRouter } from "next/router"
import { ShareProps } from "."
import Card from "../Card"
import IconButton from "../IconButton/IconButton"

export enum Socials {
  "twitter",
  "facebook",
}

export default function Share({ className, text, ...remaining }: ShareProps) {
  const getLink = (social: Socials) => {
    const link = "https://tailwindcss.com/docs/will-change"

    switch (social) {
      case Socials.twitter:
        return `http://www.twitter.com/share?url=${link}&text=${text}`
      case Socials.facebook:
      default:
        return `https://www.facebook.com/sharer/sharer.php?u=${link}`
    }
  }

  const shareLink = (social: Socials) => {
    window.open(getLink(social), "_target")
  }

  return (
    <Card
      {...remaining}
      className={classNames(
        className,
        "flex justify-between items-center py-2"
      )}
    >
      <div className="font-semibold text-sm">Share</div>
      <div className="flex items-center">
        <IconButton
          onClick={() => shareLink(Socials.twitter)}
          bgType="none"
          icon="twitter"
        />
        <IconButton
          onClick={() => shareLink(Socials.facebook)}
          bgType="none"
          icon="facebook"
        />
      </div>
    </Card>
  )
}
