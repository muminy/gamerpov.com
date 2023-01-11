import { HeroProps } from "."
import BlogCard, { HeroCardType } from "../HeroCard"
import Repeater from "../Repeater"

export default function HomeHero({ items }: HeroProps) {
  return (
    <Repeater<HeroCardType>
      items={items}
      className="grid grid-cols-12 xl:gap-2 lg:gap-2 md:gap-2 xl:mx-0 lg:mx-0 -mx-4"
      renderItem={(item, index) => (
        <div
          key={`custom${index}`}
          className="xl:col-span-3 md:col-span-6 col-span-12"
        >
          <BlogCard {...item} />
        </div>
      )}
    />
  )
}
