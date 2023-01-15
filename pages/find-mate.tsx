import Breadcrumb from "@/components/Breadcrumb"
import Chat from "@/components/Chat/Chat"
import Sidebar from "@/components/Chat/Sidebar"
import Container from "@/components/Container"

export default function Mate() {
  return (
    <Container>
      <Breadcrumb
        items={[{ title: "Home", to: "/" }, { title: "Find Mate" }]}
      />
      <div className="grid grid-cols-12 gap-x-5">
        <Sidebar className="xl:col-span-3 col-span-12" />
        <Chat className="xl:col-span-9 col-span-12" />
      </div>
    </Container>
  )
}
