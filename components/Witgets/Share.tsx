import classNames from "classnames"
import { ShareProps } from "."
import IconButton from "../IconButton/IconButton"
import Title from "../Title"

export enum Socials {
  "twitter",
  "facebook",
}

export default function Share({
  className,
  text,
  ...remaining
}: ShareProps) {
  const getLink = (social: Socials) => {
    const link = window.location.href

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
    <div {...remaining} className={classNames("mb-5", className)}>
      <Title title="Share" />
      <div className="flex items-center space-x-2 mb-2">
        <IconButton
          onClick={() => shareLink(Socials.twitter)}
          icon="twitter"
          text="Twitter"
          className="rounded-none h-8 px-2 space-x-2"
        />
        <IconButton
          onClick={() => shareLink(Socials.facebook)}
          icon="facebook"
          text="Facebook"
          className="rounded-none h-8 px-2 space-x-2"
        />
      </div>
    </div>
  )
}
