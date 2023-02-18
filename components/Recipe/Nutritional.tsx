import { NameValue } from "@/types/index"
import { NutritionalProps } from "."
import Repeater from "../Repeater"

export default function Nutritional({ items }: NutritionalProps) {
  const renderItem = ({ name, value }: NameValue, index: number) => (
    <div
      key={index}
      className="w-full bg-gray-100 dark:bg-dark-secondary xl:py-10 py-6 flex flex-col rounded-xl items-center"
    >
      <div className="font-black">{value}</div>
      <div className="font-semibold text-xs dark:text-gray-400">
        {name}
      </div>
    </div>
  )

  return (
    <div className="article-content">
      <Repeater<NameValue>
        className="grid grid-cols-4 rounded-xl overflow-hidden gap-x-2"
        items={items}
        renderHeader={
          <h2 className="font-semibold">Beslenme Bilgileri</h2>
        }
        renderItem={renderItem}
      />
    </div>
  )
}
