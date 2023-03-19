import classNames from "classnames"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import IconButton from "../IconButton"

export default function SwitchTheme() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // access for theme
  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  const changeTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <IconButton
      icon={isDark ? "moonFill" : "sunFill"}
      className={classNames(
        "rounded-2xl w-11 h-11",
        "bg-white bg-opacity-10 text-white dark:bg-white dark:bg-opacity-10"
      )}
      textClassName="text-xs xl:block hidden"
      onClick={changeTheme}
    />
  )
}
