import classNames from "classnames"
import { useTheme } from "next-themes"
import { FooterProps } from "."
import Container from "../Container"
import Logo from "../Logo"

export default function Footer({ className, ...remainingProps }: FooterProps) {
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === "dark"

  const handleChangeTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Container
      {...remainingProps}
      className={classNames(
        "bg-black dark:bg-dark-secondary p-10 xl:grid flex flex-col items-center grid-cols-12 gap-5 justify-center mt-auto",
        "xl:mb-10 xl:rounded-3xl"
      )}
    >
      <div className="col-span-6 space-y-2 xl:block flex flex-col items-center">
        <Logo size={18} color="#ffffff" />
        <p className="text-gray-300 text-sm xl:w-2/4 lg:w-2/4 xl:text-left text-center">
          Gamerpov 2023 Yılını ilk ayında, oyunlara yönelik kurulmuş bir içerik
          paylaşım sitesidir.
        </p>
      </div>
      <div className="col-span-6 flex justify-end items-center">
        <button
          onClick={handleChangeTheme}
          className="flex items-center space-x-2 text-gray-400 bg-white bg-opacity-10 px-3 py-2 rounded-xl"
        >
          Switch Theme
        </button>
      </div>
    </Container>
  )
}
