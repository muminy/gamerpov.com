import Card from "@/components/Card"
import Container from "@/components/Container"

export default function notFound() {
  return (
    <Container>
      <Card className="flex items-center justify-center h-full text-4xl font-black py-10">
        Not Found
      </Card>
    </Container>
  )
}
