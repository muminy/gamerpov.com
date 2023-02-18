import { NameValue } from "@/types/index"
import classNames from "classnames"
import { IngredientsProps } from "."
import Repeater from "../Repeater"

export default function Ingredients({ items }: IngredientsProps) {
  const renderItem = ({ name, value }: NameValue, index: number) => {
    return (
      <div key={index} className="flex items-start space-x-4">
        <div
          className={classNames(
            "bg-blue-100 dark:bg-dark-secondary min-w-[60px] rounded-xl px-3 py-1.5",
            "text-center whitespace-nowrap text-sm min-h-[30px] ",
            { "!bg-gray-100 dark:!bg-dark-secondary": !value }
          )}
        >
          {value ?? ""}
        </div>
        <div className={classNames("rounded-xl w-full")}>{name}</div>
      </div>
    )
  }
  return (
    <div className="article-content">
      <Repeater<NameValue>
        className="space-y-3 font-semibold"
        items={items}
        renderHeader={<h2 className="font-semibold">İçindekiler</h2>}
        renderItem={renderItem}
      />
    </div>
  )
}
