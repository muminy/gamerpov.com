import classNames from "classnames"
import { StepsProps } from "."
import Repeater from "../Repeater"

export default function Steps({ items }: StepsProps) {
  const renderItem = (item: string, index: number) => {
    return (
      <div key={index} className="flex space-x-4 items-start">
        <div
          className={classNames(
            "bg-yellow-100 dark:bg-dark-secondary center-center",
            "font-black text-sm",
            "min-w-[60px] py-1.5 rounded-xl"
          )}
        >
          {index + 1}
        </div>
        <div
          className={classNames(
            "w-full",
            "font-semibold rounded-xl xl:w-3/4 w-full inline-flex"
          )}
        >
          {item}
        </div>
      </div>
    )
  }
  return (
    <div className="article-content">
      <Repeater<string>
        className="space-y-3 font-semibold"
        items={items}
        renderHeader={<h2 className="font-semibold">Adımlar</h2>}
        renderItem={renderItem}
      />
    </div>
  )
}
