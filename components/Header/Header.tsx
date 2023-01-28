import Container from "../Container"
import Logo from "../Logo"
import style from "./header.module.css"
import classNames from "classnames"
import IconButton from "../IconButton/IconButton"
import Drawer from "../Drawer"
import React, { useState } from "react"
import MenuList from "../MenuList"
import { showModal } from "@/helpers/modal"
import SwitchTheme from "../SwitchTheme"

export default function Header() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div
      className={classNames(
        style.header,
        "flex items-center mb-5 border-b border-gray-100 dark:border-dark-border",
        "bg-white dark:bg-dark-bg"
      )}
    >
      <Container className={style.container}>
        <Logo
          className="h-[70px] flex items-center text-black dark:text-white"
          size={24}
        />
        <div className="flex items-center text-white justify-between w-full">
          <MenuList />
          <div className="flex items-center ml-auto space-x-2">
            <IconButton
              onClick={() => showModal("search-modal")}
              icon="search"
              className={classNames(
                "rounded-full h-9 px-3 space-x-1",
                "xl:w-auto w-9"
              )}
              text="Search"
              isDark
              textClassName="text-xs xl:block hidden"
            />
            <SwitchTheme />
            <IconButton
              icon="menu"
              id="responsive-menu"
              size={18}
              onClick={() => setIsActive(true)}
              className="xl:hidden lg:hidden flex rounded-full h-9 w-9"
              isDark
            />
          </div>
        </div>
      </Container>
      <Drawer
        isActive={isActive}
        onClose={() => setIsActive(false)}
        renderContent={() => <MenuList isResponsive />}
      />
    </div>
  )
}
