export const threeDots = (
  text?: string,
  max_length = 100,
  default_text?: string
) => {
  if (text) {
    return `${text.substring(0, max_length)}...`
  } else {
    return default_text ?? ""
  }
}

export function removeHtmlTags(str: string) {
  return str.replace(/(<([^>]+)>)/gi, "")
}