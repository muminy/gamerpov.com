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
      isDark
      text={isDark ? "Dark" : "Light"}
      icon={isDark ? "moonFill" : "sunFill"}
      className="px-3 space-x-1"
      textClassName="text-xs"
      onClick={changeTheme}
    />
  )
}
