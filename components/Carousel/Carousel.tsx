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
        className={cn("snap-x overflow-x-hidden relative space-x-4", className)}
      >
        {items.map((item, index) => (
          <div key={index} id={`${index}_carousel`}>
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      <button
        className="absolute -left-5 w-10 h-10 border-4 border-white bg-black bg-opacity-70 text-white rounded-full flex items-center justify-center"
        onClick={goPrev}
      >
        <Icon icon="arrowLeft" />
      </button>

      <button
        className="absolute -right-5 w-10 h-10 border-4 border-white bg-black bg-opacity-70 text-white rounded-full flex items-center justify-center"
        onClick={goNext}
      >
        <Icon icon="arrowRight" />
      </button>
    </div>
  )
}
