import style from "./header.module.css"
import classNames from "classnames"
import React from "react"
import Logo from "../Logo"
import Container from "../Container"
import IconButton from "../IconButton/IconButton"
import Drawer from "../Drawer"
import Menulist from "../MenuList"
import { useRouter } from "next/router"
import { showModal } from "@/helpers/modal"
import SwitchTheme from "../SwitchTheme"

export default function Header() {
  const [isActive, setIsActive] = React.useState(false)
  const { push } = useRouter()

  return (
    <div
      className={classNames(
        style.header,
        "border-b-4 border-b-amber-400",
        "flex h-[60px] items-center"
      )}
    >
      <div className="flex items-center space-x-10 text-black dark:text-white mr-10">
        <Logo size={20} />
      </div>
      <Menulist />
      <div className="flex items-center space-x-2 ml-auto">
        <IconButton
          className="text-white px-3 space-x-2 xl:w-auto w-9"
          textClassName="xl:block hidden"
          icon="search"
          isDark
          text="Search"
          onClick={() => showModal("search-modal")}
        />
        <SwitchTheme />
        <IconButton
          className="text-white xl:hidden flex w-9"
          icon="menu"
          isDark
          onClick={() => setIsActive(true)}
        />
      </div>
      <Drawer
        isActive={isActive}
        onClose={() => setIsActive(false)}
        renderContent={<Menulist isResponsive />}
      />
    </div>
  )
}
