import { HeroProps } from "."
import BlogCard, { HeroCardType } from "../HeroCard"
import Repeater from "../Repeater"

export default function HomeHero({ items }: HeroProps) {
  return (
    <Repeater<HeroCardType>
      items={items.slice(0, 4)}
      className="grid grid-cols-12 xl:gap-2 lg:gap-2 gap-4"
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
