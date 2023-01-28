import { MenuType } from "@/types/index"
import classNames from "classnames"
import { FooterProps } from "."
import Container from "../Container"
import Logo from "../Logo"
import Permalink from "../Permalink"
import Repeater from "../Repeater"

export default function Footer({
  className,
  ...remainingProps
}: FooterProps) {
  const contacts: MenuType[] = [
    { href: "/privacy", title: "Privacy Policy" },
    { href: "/about", title: "About Us" },
  ]

  const renderFooterLink = (item: MenuType, index: number) => (
    <Permalink
      className={classNames(
        "text-white text-sm",
        "hover:text-blue-500 duration-300"
      )}
      href={item.href}
      title={item.title}
    />
  )

  return (
    <Container
      {...remainingProps}
      className={classNames(
        "dark:bg-transparent dark:border dark:border-dark-border bg-black p-10 flex flex-col items-center grid-cols-12 space-y-5 justify-center mt-auto",
        "xl:mb-10 xl:rounded-3xl"
      )}
    >
      <div className="space-y-2 flex flex-col justify-center items-center">
        <Logo size={24} color={"#ffffff"} />
        <p className="text-gray-500 text-sm xl:w-2/4 mx-auto text-center">
          Gamerpov is a content sharing site established for games in the
          first month of 2023.
        </p>
      </div>

      <Repeater<MenuType>
        items={contacts}
        className="flex items-center space-x-3"
        renderItem={renderFooterLink}
      />
    </Container>
  )
}
