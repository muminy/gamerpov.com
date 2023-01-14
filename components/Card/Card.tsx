import classNames from "classnames"
import { CardProps } from "."

export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={classNames(
        "dark:bg-dark-secondary bg-gray-100 p-4 rounded-xl",
        className
      )}
    />
  )
}
