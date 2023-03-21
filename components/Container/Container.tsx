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
    [ContainerSizeType.large]: "max-w-3xl",
    [ContainerSizeType.small]: "max-w-xl",
    [ContainerSizeType.xsmall]: "max-w-[600px]",
  }
  return (
    <div
      {...remainingProps}
      className={classNames(
        "container mx-auto 2xl:px-5 xl:px-10 lg:px-8 px-5",
        maxSize[size],
        className
      )}
    />
  )
}
