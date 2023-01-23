import { CategoryType } from "@/types/site"
import Category from "../Category"
import { useSiteContent } from "context/site"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

import "swiper/css"
import "swiper/css/navigation"

export default function CategoryList() {
  const { categories } = useSiteContent()

  const renderItem = (item: CategoryType, index: number) => (
    <SwiperSlide key={index} style={{ width: 200, marginRight: 10 }}>
      <Category {...item} />
    </SwiperSlide>
  )

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={10}
      modules={[Pagination, Navigation]}
      className="mb-10 mt-5"
    >
      {categories.map(renderItem)}
    </Swiper>
  )
}
