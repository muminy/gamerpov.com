import classNames from "classnames"
import { useRouter } from "next/navigation"
import Container from "../Container"

import Logo from "../Logo"
import style from "./header.module.css"

export default function BlogDetailHeader() {
  const navigation = useRouter()
  const canRouteBack = () => {
    navigation.back()
  }

  return (
    <header className={classNames(style.header, "flex items-center")}>
      <Container className="flex justify-between py-3">
        <button
          color="secondary"
          className="text-sm px-2 border-0 py-2 bg-white"
          onClick={canRouteBack}
        >
          Back to home
        </button>
        <Logo />
      </Container>
    </header>
  )
}
