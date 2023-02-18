import { LayoutProps } from "."
import Footer from "../Footer"
import Header from "../Header"
import { motion } from "framer-motion"

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="pb-24 pt-4 xl:px-24 lg:px-16 px-4 main-layout"
      >
        {children}
      </motion.div>
      <Footer />
    </div>
  )
}
