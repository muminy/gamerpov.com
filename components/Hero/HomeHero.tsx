import { HeroProps } from "."
import BlogCard, { HeroCardType } from "../HeroCard"
import Repeater from "../Repeater"

export default function HomeHero({ items }: HeroProps) {
  return (
    <Repeater<HeroCardType>
      items={items}
      className="grid grid-cols-12 gap-2"
      renderItem={(item, index) => (
        <div
          key={`custom${index}`}
          key={index}
          className="xl:col-span-3 md:col-span-6 col-span-12"
        >
          <BlogCard {...item} />
        </div>
      )}
    />
  )
}
