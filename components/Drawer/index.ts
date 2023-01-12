import { ReactNode } from "react"

export type DrawerProps = {
  width?: number
  isActive: boolean
  renderContent(): ReactNode
  onClose(): void
}

export { default } from "./Drawer"
