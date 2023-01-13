import { CategoryType } from "@/types/site"
import cn from "classnames"
import { useSiteContent } from "context/site"
import { useRouter } from "next/router"
import { MenuListProps } from "."
import Icon from "../Icon"
import Permalink from "../Permalink"
import Repeater from "../Repeater"
import style from "./style.module.css"

export default function MenuList({ isResponsive }: MenuListProps) {
  const { categories } = useSiteContent()
  const { asPath } = useRouter()

  const renderMenu = (item: CategoryType, isResponsive = false) => (
    <li key={item.slug}>
      <Permalink
        className={cn(style.permalink, {
          [style["active-permalink"]]: asPath === `/category/${item.slug}`,
          "h-[40px]": isResponsive,
        })}
        href={`/category/${item.slug}`}
        title={item.name}
      >
        <span>{item.name}</span>
        <Icon size={14} icon="external" />
      </Permalink>
    </li>
  )

  return (
    <Repeater<CategoryType>
      items={categories}
      as="ul"
      renderItem={(item) => renderMenu(item, isResponsive)}
      className={cn({
        "hidden xl:flex lg:flex items-center": !isResponsive,
        "flex-col block": isResponsive,
      })}
    />
  )
}
