import React from "react"

export enum ContainerSizeType {
  "xsmall" = "xsmall",
  "small" = "small",
  "large" = "large",
  "xlarge" = "xlarge",
  "big" = "big",
}
export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  //
  size?: keyof typeof ContainerSizeType
}
export { default } from "./Container"
