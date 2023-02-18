import { CategoryType } from "@/types/index"
import Category from "../Category"
import { useSiteContent } from "context/site"
import { SwiperSlide } from "swiper/react"
import SwiperWrapper from "../SwiperWrapper"

export default function CategoryList() {
  const { categories } = useSiteContent()

  const renderItem = (item: CategoryType, index: number) => (
    <SwiperSlide key={index} style={{ width: 200, marginRight: 10 }}>
      <Category {...item} />
    </SwiperSlide>
  )

  return (
    <SwiperWrapper title="Categories" spaceBetween={10}>
      {categories.map(renderItem)}
    </SwiperWrapper>
  )
}
