import classNames from "classnames"
import { ContainerProps, ContainerSizeType } from "."

export default function Container({
  className,
  size = "xlarge",
  ...remainingProps
}: ContainerProps) {
  const maxSize = {
    [ContainerSizeType.xlarge]: "max-w-7xl",
    [ContainerSizeType.large]: "max-w-4xl",
    [ContainerSizeType.small]: "max-w-xl",
  }
  return (
    <div
      {...remainingProps}
      className={classNames("container mx-auto", maxSize[size], className)}
    />
  )
}
