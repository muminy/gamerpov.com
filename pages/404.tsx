import Card from "@/components/Card"
import Container from "@/components/Container"
import NotFound from "@/components/NotFound"
import Seo from "@/components/Seo"

export default function NotFoundPage() {
  return (
    <Container>
      <Seo title="Not Found" />
      <NotFound title="Not Found Page" description="Could you be wrong?" />
    </Container>
  )
}