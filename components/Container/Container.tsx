import classNames from "classnames"
import { ContainerProps, ContainerSizeType } from "."

export default function Container({
  className,
  size = "xlarge",
  ...remainingProps
}: ContainerProps) {
  const maxSize = {
    [ContainerSizeType.big]: "max-w-[1500px]",
    [ContainerSizeType.xlarge]: "max-w-7xl",
    [ContainerSizeType.large]: "max-w-4xl",
    [ContainerSizeType.small]: "max-w-xl",
    [ContainerSizeType.xsmall]: "max-w-[600px]",
  }
  return (
    <div
      {...remainingProps}
      className={classNames("container mx-auto", maxSize[size], className)}
    />
  )
}
