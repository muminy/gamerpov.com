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

export default function Header() {
  const pathname = usePathname()
  const { categories } = useSiteContent()

  const renderMenuList = (item: CategoryType) => (
    <li key={item.slug}>
      <Permalink
        className={classNames(style.permalink, {
          [style["active-permalink"]]: pathname === item.slug,
        })}
        href={`/category/${item.slug}`}
        title={item.name}
      />
    </li>
  )

  return (
    <header className={classNames(style.header, "flex items-center")}>
      <Container className="flex items-center w-full justify-between xl:space-x-10 lg:space-x-6 space-x-4">
        <Logo />

        <div className="flex ml-4 space-x-2">
          <input
            placeholder="Arama Yap"
            className="px-5 h-10 rounded-2xl w-[200px] bg-gray-100 outline-none text-sm"
          />
          <Repeater<CategoryType>
            items={categories}
            as="ul"
            renderItem={renderMenuList}
            className="items-center space-x-2 ml-auto hidden xl:flex lg:flex"
          />
          <IconButton
            icon="menu"
            size={18}
            className="h-10 w-10 xl:hidden lg:hidden flex"
          />
        </div>
      </Container>
    </header>
  )
}
