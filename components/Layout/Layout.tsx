import { LayoutProps } from "."
import Footer from "../Footer"
import Header from "../Header"

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="pb-24 xl:px-24 lg:px-16 px-4 main-layout">
        {children}
      </main>
      <Footer />
    </div>
  )
}
