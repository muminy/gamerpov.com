import classNames from "classnames"
import { useTheme } from "next-themes"
import { FooterProps } from "."
import Button from "../Button"
import Container from "../Container"
import Logo from "../Logo"

export default function Footer({
  className,
  ...remainingProps
}: FooterProps) {
  const { resolvedTheme, setTheme } = useTheme()

  const isDark = resolvedTheme === "dark"

  const handleChangeTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Container
      {...remainingProps}
      className={classNames(
        "bg-dark-secondary p-10 flex flex-col items-center grid-cols-12 space-y-5 justify-center mt-auto",
        "xl:mb-10 xl:rounded-3xl"
      )}
    >
      <div className="space-y-2 flex flex-col justify-center items-center">
        <Logo size={18} color={"#ffffff"} />
        <p className="text-gray-600 text-sm xl:w-2/4 mx-auto text-center">
          Gamerpov is a content sharing site established for games in the
          first month of 2023.
        </p>
      </div>
      <div className="col-span-6 flex justify-end items-center">
        <Button.Gradient
          onClick={handleChangeTheme}
          className="flex items-center space-x-2 text-black bg-opacity-10 px-3 py-2 rounded-xl"
        >
          Switch Theme
        </Button.Gradient>
      </div>
    </Container>
  )
}
