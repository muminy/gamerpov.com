import Container from "../Container"
import Logo from "../Logo"
import Permalink from "../Permalink"
import style from "./header.module.css"
import { usePathname } from "next/navigation"
import classNames from "classnames"
import Icon from "../Icon"
import Repeater from "../Repeater"
import { MenuType } from "@/types/index"
import { menuList } from "@/constants/global"

export default function MainHeader() {
  const pathname = usePathname()

  const renderMenuList = (item: MenuType) => (
    <li key={item.href}>
      <Permalink
        className={classNames(style.permalink, {
          [style["active-permalink"]]: pathname === item.href,
        })}
        href={item.href}
        title={item.title}
      />
    </li>
  )

  return (
    <header className={classNames(style.header, "flex items-center")}>
      <Container className="flex items-center w-full justify-between space-x-10">
        <Logo />
        <input
          placeholder="Arama Yap"
          className="px-4 py-3 rounded-xl w-full bg-gray-100 outline-none text-sm"
        />
        <div className="flex ml-4 space-x-2">
          <Repeater<MenuType>
            items={menuList}
            as="ul"
            renderItem={renderMenuList}
            className="items-center space-x-2 ml-auto hidden xl:flex lg:flex"
          />
          <button className="w-10 h-10 bg-gray-100 text-black rounded-xl flex justify-center items-center">
            <Icon icon="menu" />
          </button>
        </div>
      </Container>
    </header>
  )
}
