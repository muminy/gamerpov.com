import { LayoutProps } from "."
import Footer from "../Footer"
import Header from "../Header"
import Sidebar from "../Sidebar"

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex xl:flex-row flex-col relative">
      <Sidebar />
      <div className="xl:ml-[140px] w-full">
        <Header />
        <main className="mb-20">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
