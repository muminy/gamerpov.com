import { Swiper } from "swiper/react"
import { Navigation } from "swiper"

import "swiper/css"
import "swiper/css/navigation"

import { SwiperWrapperProps } from "."
import classNames from "classnames"
import IconButton from "../IconButton"

const ArrowButtons = () => {
  return (
    <div className="flex items-center justify-end space-x-2">
      <IconButton
        icon="arrowLeft"
        className={classNames(
          "image-swiper-button-prev",
          "bg-black dark:bg-dark-secondary",
          "text-white",
          "font-semibold space-x-2 px-4",
          "disabled:dark:bg-dark-secondary disabled:dark:text-white disabled:dark:!text-opacity-25",
          "disabled:text-opacity-25"
        )}
        text="Prev"
        isDark
        textClassName="text-xs"
      />
      <IconButton
        icon="arrowRight"
        className={classNames(
          "image-swiper-button-next",
          "flex-row-reverse",
          "bg-black dark:bg-dark-secondary",
          "text-white",
          "font-semibold px-4",
          "disabled:dark:text-opacity-25",
          "disabled:text-opacity-25"
        )}
        text="Next"
        isDark
        textClassName="text-xs mr-1"
      />
    </div>
  )
}

export default function SwiperWrapper({
  children,
  slidesPerView = "auto",
  spaceBetween,
  title,
}: SwiperWrapperProps) {
  return (
    <div className={classNames("mb-10")}>
      <div className="flex justify-between items-center py-4">
        <div className="font-bold">{title}</div>
        <ArrowButtons />
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        modules={[Navigation]}
      >
        {children}
      </Swiper>
    </div>
  )
}
