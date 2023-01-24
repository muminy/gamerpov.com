import {
  ModalListType,
  ModalPositionType,
  modalRef,
} from "@/components/Modal"

export function showModal(
  modalName: ModalListType,
  position: ModalPositionType = "top"
) {
  modalRef.current?.show(modalName, position)
}
