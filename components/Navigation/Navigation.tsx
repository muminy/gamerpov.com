import Repeater from "../Repeater"
import Permalink from "../Permalink"
import cn from "classnames"
import { useSiteContent } from "context/site"
import { CategoryType } from "@/types/index"
import { useRouter } from "next/router"
import { NavigationProps } from "."

export default function Navigation({ isResponsive }: NavigationProps) {
  const { menu } = useSiteContent()
  const { asPath } = useRouter()
  const renderNavigations = (item: CategoryType, key: number) => {
    const link = `/category/${item.slug}`

    return (
      <Permalink
        className={cn(
          "font-bold text-sm text-gray-900 dark:text-white",
          "duration-300 px-3.5 py-2 rounded-xl",
          "flex items-center space-x-2",
          "hover:bg-gray-100 hover:dark:bg-dark-secondary",
          {
            "bg-gray-100 dark:bg-dark-secondary": asPath === link,
            "bg-dark-secondary hover:bg-dark-secondary hover:text-white":
              isResponsive,
          }
        )}
        href={link}
        key={key}
      >
        {item.name}
      </Permalink>
    )
  }

  return (
    <Repeater
      items={menu}
      className={cn("flex space-x-1", {
        "flex-col space-x-0 space-y-2": isResponsive,
      })}
      renderItem={renderNavigations}
    />
  )
}
