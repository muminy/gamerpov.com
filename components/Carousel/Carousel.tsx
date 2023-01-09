import cn from "classnames"
import { useState } from "react"
import { CarouselProps } from "."
import Icon from "../Icon"

export default function Carousel<T>({
  items,
  renderItem,
  className,
}: CarouselProps<T>) {
  const [current, setCurrent] = useState(0)
  const goNext = () => {
    const currentIndex = current + 1
    const nextElement = document.getElementById(`${currentIndex}_carousel`)

    if (nextElement) {
      nextElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      })
      setCurrent((prev) => prev + 1)
    }
  }
  const goPrev = () => {
    const currentIndex = current - 1
    const nextElement = document.getElementById(`${currentIndex}_carousel`)

    if (nextElement) {
      nextElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      })
      setCurrent((prev) => prev - 1)
    }
  }
  return (
    <div className="relative flex items-center">
      <div
        className={cn("snap-x overflow-x-auto relative space-x-4", className)}
      >
        {items.map((item, index) => (
          <div className="snap-center" key={index} id={`${index}_carousel`}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  )
}
