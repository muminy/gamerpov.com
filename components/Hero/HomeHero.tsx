import { HeroProps } from "."
import BlogCard, { HeroCardType } from "../HeroCard"
import Repeater from "../Repeater"

export default function HomeHero({ items }: HeroProps) {
  return (
    <Repeater<HeroCardType>
      items={items}
      className="grid xl:grid-cols-4 grid-cols-2 xl:gap-2 lg:gap-2 gap-4"
      renderItem={(item, index) => (
        <BlogCard key={`custom${index}`} {...item} />
      )}
    />
  )
}
