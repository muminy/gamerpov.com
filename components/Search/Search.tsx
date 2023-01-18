import { AnimatePresence, motion } from "framer-motion"
import { useImperativeHandle, forwardRef, useState, useEffect } from "react"
import { SearchRefType } from "."
import Card from "../Card"
import Form from "../FormElement"
import Title from "../Title"

export const Search = forwardRef<SearchRefType>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false)

  useImperativeHandle(ref, () => ({
    show: () => setIsOpen(true),
  }))

  useEffect(() => {
    document.body.style.overflow = isOpen ? "auto" : "hidden"
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.75,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              ease: "easeOut",
              duration: 0.15,
            },
          }}
          exit={{
            opacity: 0,
            scale: 0.75,
            transition: {
              ease: "easeIn",
              duration: 0.15,
            },
          }}
          className="fixed top-0 xl:py-24 xl:px-10 px-5 py-2 overflow-y-auto left-0 w-full h-full z-20 flex flex-col items-center bg-dark-secondary bg-opacity-10 backdrop-blur-xl"
        >
          <button
            onClick={() => {
              setIsOpen(false)
            }}
            className="absolute left-0 z-10 top-0 h-full w-full "
          />
          <div className="container max-w-4xl mx-auto z-40">
            <div className="p-6 dark:bg-black bg-white rounded-xl mb-10">
              <Form.Input placeholder="Faze Clan." className="py-3 mb-10" />
              <Title title="Popüler" icon="flash" />

              <Card className="text-sm font-semibold">
                Not Working Right Now
              </Card>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
})
