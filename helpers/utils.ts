import dayjs from "dayjs"

export type EqualProps = string | number

export function isEqual(first: EqualProps, second: EqualProps) {
  return first === second
}

export function itemsLength(items: string | any[]) {
  return items.length
}

export function removeHtmlTags(str: string) {
  return str.replace(/(<([^>]+)>)/gi, "")
}

export function getDate(date: string) {
  return dayjs(date).locale("tr").format("DD MMMM, YYYY")
}
