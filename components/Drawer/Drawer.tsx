import { DrawerProps } from "."
import { Dialog, Transition } from "@headlessui/react"
import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Drawer({
  isActive = false,
  renderContent,
  onClose,
}: DrawerProps) {
  const { asPath } = useRouter()
  useEffect(() => {
    onClose && onClose()
  }, [asPath])

  return (
    <Transition.Root show={isActive} as={"div"}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={"div"}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white dark:bg-dark-secondary dark:bg-opacity-70 bg-opacity-20 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={"div"}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-[200px]">
                  <div className="flex flex-col overflow-y-auto bg-black py-6 px-8 h-screen shadow-xl">
                    {renderContent}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
