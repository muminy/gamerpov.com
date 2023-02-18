import Container from "@/components/Container"
import Logo from "@/components/Logo"
import Seo from "@/components/Seo"

export default function About() {
  return (
    <Container size="small" className="article-content">
      <Seo title="About Us" description="Gamerpov.com About" />
      <Logo
        size={40}
        className="mt-10 flex justify-center dark:!text-white !text-black"
      />
      <p className="text-center">
        Gamerpov is a content sharing site established for games in the
        first month of 2023.
      </p>
    </Container>
  )
}