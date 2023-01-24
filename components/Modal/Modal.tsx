import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"
import {
  useImperativeHandle,
  forwardRef,
  useRef,
  useState,
  useMemo,
  useEffect,
} from "react"
import { ModalListType, ModalPositionType, ModalRefType } from "."
import Modals from "./components"
import { useRouter } from "next/router"

const Modal = forwardRef<ModalRefType>((props, ref) => {
  const location = useRouter()
  const modalRef = useRef<ModalListType>()
  const modalPosition = useRef<ModalPositionType>("top")
  const [showModal, setShowModal] = useState(false)

  useImperativeHandle(ref, () => ({
    show: (modalName: ModalListType, position: ModalPositionType) => {
      modalRef.current = modalName
      modalPosition.current = position
      setShowModal(true)
    },
  }))

  const ModalContent = useMemo(() => {
    return Modals[modalRef.current as ModalListType]
  }, [modalRef.current])

  useEffect(() => {
    setShowModal(false)
  }, [location])

  const variables = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeIn",
        duration: 0.15,
      },
    },
  }

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          {...variables}
          className={classNames(
            "fixed top-0 overflow-y-auto left-0 w-full h-full z-20",
            "flex flex-col items-center xl:py-24 xl:px-10 px-5 py-2",
            "bg-dark-secondary bg-opacity-10 backdrop-blur-xl"
          )}
        >
          <button
            onClick={() => {
              setShowModal(false)
            }}
            className="absolute left-0 z-10 top-0 h-full w-full "
          />
          <div
            className={classNames("container max-w-4xl mx-auto z-40", {
              "my-auto": modalPosition.current === "center",
            })}
          >
            <ModalContent />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})

Modal.displayName = "Modal"
export default Modal
