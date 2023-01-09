import MenuIcon from "./Menu.icon"
import FBIcon from "./Facebook.icon"
import TwitterIcon from "./Twitter.icon"
import LinkIcon from "./Link.icon"
import CommentIcon from "./Comment.icon"
import PenIcon from "./Pen.icon"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "./Arrows.icons"
import InfoIcon from "./Info.icon"
import ExternalIcon from "./External.icon"

const icons = {
  menu: MenuIcon,
  facebook: FBIcon,
  twitter: TwitterIcon,
  link: LinkIcon,
  comment: CommentIcon,
  pen: PenIcon,
  arrowUp: ArrowUpIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowDown: ArrowDownIcon,
  info: InfoIcon,
  external: ExternalIcon,
}

export type IconTypes = keyof typeof icons

export default icons
