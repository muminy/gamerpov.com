import Container from "../Container"
import Logo from "../Logo"
import style from "./header.module.css"
import classNames from "classnames"
import IconButton from "../IconButton/IconButton"
import Drawer from "../Drawer"
import React, { useState } from "react"
import MenuList from "../MenuList"
import Button from "../Button"
import Icon from "../Icon"
import { useRouter } from "next/router"

export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const { push } = useRouter()

  return (
    <div
      className={classNames(
        style.header,
        "flex items-center mb-5 border-b border-dark-border"
      )}
    >
      <Container size="big" className={style.container}>
        <Logo
          className="xl:border-r lg:border-r xl:-ml-8 lg:-ml-8 border-white pr-4 border-opacity-10 h-[70px] flex items-center"
          size={18}
          color="#ffffff"
        />
        <div className="flex items-center text-white justify-between w-full">
          <MenuList />
          <div className="flex items-center ml-auto space-x-2">
            <Button.Gradient
              onClick={() => push("/find-mate")}
              className="space-x-2"
            >
              <Icon size={18} icon="commentFill" />
              <span>Find Mate</span>
            </Button.Gradient>
            <IconButton icon="search" />
            <IconButton
              icon="menu"
              id="responsive-menu"
              size={18}
              onClick={() => setIsActive(true)}
              className="xl:hidden lg:hidden flex"
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
