import MenuIcon from "./Menu.icon"
import LinkIcon from "./Link.icon"
import CommentIcon, { CommentFillIcon } from "./Comment.icon"
import PenIcon from "./Pen.icon"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "./Arrows.icons"
import InfoIcon from "./Info.icon"
import ExternalIcon from "./External.icon"
import BookMarkIcon, { BookMarkFillIcon } from "./BookMark.icon"
import { FlashIcon } from "./Remix.icon"
import { CloseIcon, SearchIcon, ChevronDownIcon } from "./Radix.icons"
import { MoonFillIcon, SunFillIcon } from "./Figma.icons"
import {
  TwitchIcon,
  FacebookIcon,
  Twitch2Icon,
  TwitterIcon,
} from "./Socials.icons"
import PinIcon from "./Pin.icon"

const icons = {
  menu: MenuIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  link: LinkIcon,
  comment: CommentIcon,
  commentFill: CommentFillIcon,
  pen: PenIcon,
  arrowUp: ArrowUpIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowDown: ArrowDownIcon,
  arrowChevronDown: ChevronDownIcon,
  info: InfoIcon,
  external: ExternalIcon,
  search: SearchIcon,
  bookmark: BookMarkIcon,
  bookmarkFill: BookMarkFillIcon,
  flash: FlashIcon,
  close: CloseIcon,
  pin: PinIcon,
  moonFill: MoonFillIcon,
  sunFill: SunFillIcon,
  twitch: TwitchIcon,
  twitch2: Twitch2Icon,
}

export type IconTypes = keyof typeof icons

export default icons
