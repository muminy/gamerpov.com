import { motion, AnimatePresence } from "framer-motion"
import { DrawerProps } from "."
import Icon from "../Icon"
import IconButton from "../IconButton/IconButton"

export default function Drawer({
  width = 500,
  isActive = false,
  renderContent,
  onClose,
}: DrawerProps) {
  const duration = 0.25

  const handleOnClose = () => {
    onClose && onClose()
  }

  const variants = {
    active: {
      x: 0,
    },
    inactive: {
      x: -width,
    },
  }

  return (
    <div className="fixed w-full h-full top-0 left-0 z-50">
      <button
        onClick={handleOnClose}
        className="absolute block cursor-pointer z-10 w-full h-full left-0 top-0 bg-black bg-opacity-30"
      />
      <motion.div
        animate={isActive ? "active" : "inactive"}
        variants={variants}
        transition={{ duration }}
        className="relative z-10 px-5 pt-16 pointer-events-auto bg-white h-full box-border"
        style={{
          width,
        }}
      >
        <IconButton
          onClick={handleOnClose}
          icon="close"
          className="absolute right-4 top-4"
        />
        {renderContent()}
      </motion.div>
    </div>
  )
}
