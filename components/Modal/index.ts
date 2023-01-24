import { createRef } from "react"
import Modals from "./components"

export type ModalProps = {
  //
}

export type ModalListType = keyof typeof Modals
export type ModalPositionType = "center" | "top"
export type ModalRefType = {
  show(modalName: ModalListType, position?: ModalPositionType): void
}

export const modalRef = createRef<ModalRefType>()

export { default } from "./Modal"
