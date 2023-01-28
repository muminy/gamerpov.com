import { CategoryType } from "@/types/site"
import cn from "classnames"
import { useSiteContent } from "context/site"
import { useRouter } from "next/router"
import { MenuListProps } from "."
import Permalink from "../Permalink"
import Repeater from "../Repeater"

export default function MenuList({ isResponsive }: MenuListProps) {
  const { menu } = useSiteContent()
  const { asPath } = useRouter()

  const renderMenu = (item: CategoryType, isResponsive = false) => {
    const isActive = `/category/${item.slug}` === asPath
    return (
      <li key={item.slug}>
        <Permalink
          className={cn(
            "px-3 py-2.5 rounded-2xl duration-200",
            "font-bold text-sm",
            {
              "bg-gray-100 dark:bg-dark-secondary": isActive,
              "px-0 h-8 py-0 text-white !bg-transparent": isResponsive,
              "hover:dark:bg-dark-secondary hover:bg-gray-100 text-black dark:text-white":
                !isResponsive,
            }
          )}
          href={`/category/${item.slug}`}
          title={item.name}
        />
      </li>
    )
  }

  return (
    <Repeater<CategoryType>
      items={menu}
      as="ul"
      renderItem={(item) => renderMenu(item, isResponsive)}
      className={cn({
        "hidden xl:flex lg:flex items-center space-x-1": !isResponsive,
        "flex-col block space-x-0 space-y-3": isResponsive,
      })}
    />
  )
}
