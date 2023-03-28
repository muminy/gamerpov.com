import { initialSeo } from "@/constants/seo"
import dayjs from "dayjs"
import { TagType } from "../types"

export type EqualProps = string | number

export function isEqual(first: EqualProps, second: EqualProps) {
  return first === second
}

export function itemsLength(items: string | any[]) {
  return items.length
}

export function removeHtmlTags(str: string) {
  return str.replace(/(<([^>]+)>)/gi, "").replaceAll("&#8217;", "'")
}

export function getKeywords(tag: TagType[]) {
  if (tag) {
    return tag.map((item) => item.name).join(",")
  }
  return initialSeo.keywords
}

export function getDate(date: string) {
  return dayjs(date).locale("en").format("DD MMMM, YYYY")
}
