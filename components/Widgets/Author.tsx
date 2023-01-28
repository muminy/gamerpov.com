import { threeDots } from "@/helpers/string"
import classNames from "classnames"
import { AuthorProps } from "."
import Card from "../Card"
import Title from "../Title"

export default function Author({
  name,
  description,
  className,
  ...remaining
}: AuthorProps) {
  return (
    <div {...remaining} className={classNames(className, "mb-5")}>
      <Title title={"Written By"} icon="pen" />
      <Card className="space-y-2">
        <div className="font-black text-gray-800 dark:text-gray-300">
          {name}
        </div>
        <div className="text-xs dark:text-white dark:text-opacity-70 text-gray-500">
          {threeDots(description, 100)}
        </div>
      </Card>
    </div>
  )
}
