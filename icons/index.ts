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
import BookMarkIcon from "./BookMark.icon"
import { FlashIcon } from "./Remix.icon"
import { CloseIcon } from "./Radix.icons"

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
  bookmark: BookMarkIcon,
  flash: FlashIcon,
  close: CloseIcon,
}

export type IconTypes = keyof typeof icons

export default icons
