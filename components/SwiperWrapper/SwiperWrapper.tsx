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
          "flex items-center justify-center",
          "rounded-lg bg-gray-100 dark:bg-dark-secondary",
          "disabled:bg-opacity-0 disabled:dark:bg-opacity-0"
        )}
      />
      <IconButton
        icon="arrowRight"
        className={classNames(
          "image-swiper-button-next",
          "flex items-center justify-center",
          "rounded-lg bg-gray-100 dark:bg-dark-secondary",
          "disabled:bg-opacity-0 disabled:dark:bg-opacity-0"
        )}
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
