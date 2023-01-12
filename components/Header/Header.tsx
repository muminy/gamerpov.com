import Container from "../Container"
import Logo from "../Logo"
import Permalink from "../Permalink"
import style from "./header.module.css"
import { usePathname } from "next/navigation"
import classNames from "classnames"
import Repeater from "../Repeater"
import IconButton from "../IconButton/IconButton"
import { useSiteContent } from "context/site"
import { CategoryType } from "@/types/site"
import Drawer from "../Drawer"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const { categories } = useSiteContent()
  const [isActive, setIsActive] = useState(false)
  const toggle = () => setIsActive(!isActive)

  const renderMenu = (item: CategoryType, isResponsive?: boolean) => (
    <li key={item.slug}>
      <Permalink
        className={classNames(style.permalink, {
          [style["active-permalink"]]: pathname === `/category/${item.slug}`,
          "text-lg": isResponsive,
        })}
        href={`/category/${item.slug}`}
        title={item.name}
      />
    </li>
  )

  return (
    <div className={classNames(style.header, "flex items-center mb-5")}>
      <Container className={style.container}>
        <Logo size={28} />
        <div className="flex ml-4 space-x-2 items-center">
          <Repeater<CategoryType>
            items={categories}
            as="ul"
            renderItem={(item) => renderMenu(item)}
            className="items-center ml-auto hidden xl:flex lg:flex"
          />
          <input
            placeholder="Arama Yap"
            className="px-5 h-10 rounded-2xl w-[200px] xl:block lg:block hidden bg-gray-100 outline-none text-sm"
          />
          <IconButton
            icon="menu"
            id="responsive-menu"
            size={18}
            onClick={toggle}
            className="h-10 w-10 rounded-full xl:hidden lg:hidden flex"
          />
        </div>
      </Container>

      <Drawer
        isActive={isActive}
        onClose={toggle}
        renderContent={() => (
          <Repeater<CategoryType>
            items={categories}
            as="ul"
            renderItem={(item) => renderMenu(item, true)}
            className="items-center block"
          />
        )}
      />
    </div>
  )
}
