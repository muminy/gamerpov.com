import React from "react"

export enum ContainerSizeType {
  "small" = "small",
  "large" = "large",
  "xlarge" = "xlarge",
}
export type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  //
  size?: "small" | "large" | "xlarge"
}
export { default } from "./Container"
