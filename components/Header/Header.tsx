import cn from "classnames"
import Container from "../Container"
import Navigation from "../Navigation"
import Logo from "../Logo"

export default function Header() {
  return (
    <div
      className={cn(
        "border-b py-8 dark:border-b-dark-border hidden xl:block"
      )}
    >
      <Container size="big" className="flex justify-between">
        <div className="flex items-center space-x-5">
          <Logo />
          {/* <Input icon="search" placeholder="Ara." /> */}
        </div>
        <Navigation />
      </Container>
    </div>
  )
}
