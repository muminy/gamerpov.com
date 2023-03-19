import cn from "classnames"
import { ButtonProps } from "."
import { BgColorTypes } from "@/types/index"
import Loading from "../Loading"
import Icon from "../Icon"

export default function Button({
  text,
  isLoading,
  icon,
  size = 18,
  bgColor = BgColorTypes.DEFAULT,
  className,
  ...props
}: ButtonProps) {
  const style = {
    [BgColorTypes.DARK]:
      "bg-black text-white dark:text-black dark:bg-white",
    [BgColorTypes.DEFAULT]: "bg-gray-200 dark:bg-dark-secondary",
    [BgColorTypes.PRIMARY]: "bg-custom-blue text-white",
  }

  return (
    <button
      className={cn(
        style[bgColor],
        "hover:bg-opacity-80 duration-300",
        "px-5 py-3 font-medium text-sm rounded-2xl",
        "flex items-center space-x-2",
        className
      )}
      {...props}
    >
      {isLoading && <Loading />}
      {icon && <Icon icon={icon} size={size} />}
      <span>{text}</span>
    </button>
  )
}
