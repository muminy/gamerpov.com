import { CategoryType } from "@/types/index"
import Category from "../Category"
import { useSiteContent } from "context/site"
import { SwiperSlide } from "swiper/react"
import SwiperWrapper from "../SwiperWrapper"
import Repeater from "../Repeater"

export default function CategoryList() {
  const { categories } = useSiteContent()

  const renderItem = (item: CategoryType, index: number) => (
    <Category key={index} {...item} />
  )

  return (
    <Repeater
      className="grid grid-cols-2 gap-2"
      items={categories}
      renderItem={renderItem}
    />
  )
}
