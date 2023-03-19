import classNames from "classnames"
import { useState } from "react"
import Drawer from "../Drawer"
import IconButton from "../IconButton"
import Logo from "../Logo"
import Navigation from "../Navigation"
import SwitchTheme from "../SwitchTheme"
import style from "./style.module.css"

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div
        className={classNames(
          style.sidebar,
          "left-0 top-0",
          "xl:fixed relative justify-center",
          "xl:w-[140px] w-full px-5",
          "flex xl:items-start items-center xl:h-screen h-10 xl:justify-center justify-between"
        )}
      >
        <div className="text-white relative z-10 xl:hidden block">
          <Logo />
        </div>
        <div
          className={classNames(
            "relative z-10 flex items-center space-x-2"
          )}
        >
          <SwitchTheme />
          <IconButton
            className={classNames(
              "rounded-2xl w-11 h-11 xl:hidden flex",
              "bg-white bg-opacity-10 text-white dark:bg-white dark:bg-opacity-10"
            )}
            onClick={() => setIsActive(true)}
            textClassName="text-xs xl:block hidden"
            icon="menu"
          />
        </div>
      </div>
      <Drawer
        isActive={isActive}
        onClose={() => setIsActive(false)}
        renderContent={<Navigation isResponsive />}
      />
    </>
  )
}
