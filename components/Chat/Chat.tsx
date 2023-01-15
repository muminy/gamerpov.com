import cn from "classnames"
import { useEffect, useState } from "react"
import { ChatProps } from "."
import io from "socket.io-client"
import Repeater from "../Repeater"

const socket = io()

type MessageType = {
  name: string
  message: string
}
export default function Chat({ className, ...props }: ChatProps) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  socket.on("connect", () => {
    socket.on("read:messages", (value) => {
      setMessages(value)
    })
  })

  const handleSendMessage = () => {
    socket.emit("new-message", {
      name: "canavar",
      message,
    })
    setMessage("")
  }

  const renderMessage = (item: MessageType, index: number) => {
    return (
      <div
        className="text-sm font-medium dark:bg-dark-secondary bg-gray-100 rounded-xl py-2 px-4 mb-2"
        key={index}
      >
        <span className="text-blue-500">{item.name}</span> : {item.message}
      </div>
    )
  }

  return (
    <div
      className={cn(
        className,
        "h-full border rounded-xl px-2 py-2 min-h-[calc(100vh-500px)] dark:border-dark-border",
        "flex flex-col justify-end"
      )}
      {...props}
    >
      <Repeater<MessageType>
        className="max-h-[600px] overflow-y-auto"
        items={messages}
        renderItem={renderMessage}
      />

      <div
        className={cn("dark:bg-dark-secondary bg-gray-100 rounded-xl relative")}
      >
        <textarea
          className={cn(
            "w-full appearance-none resize-none rounded-xl dark:bg-dark-secondary bg-gray-100",
            "outline-none focus:outline-none dark:ring-offset-dark-bg focus:ring-2 focus:ring-offset-1 ring-green-400",
            "text-sm font-semibold px-3 py-2 pb-16"
          )}
          rows={3}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Valorant oyun arkadaşı arıyorum"
        />
        <div className={cn("absolute bottom-1 left-1 px-2 py-2", "space-x-2")}>
          <button
            className={cn(
              "text-xs dark:text-gray-400 text-gray-600 font-medium dark:bg-black bg-white px-3 py-2 rounded-xl"
            )}
          >
            Arkadaş Arıyorum
          </button>
          <button className="text-xs dark:text-gray-400 text-gray-600 font-medium dark:bg-black bg-white px-3 py-2 rounded-xl">
            Tanışalım
          </button>
          <button
            onClick={handleSendMessage}
            className="text-xs text-black font-medium bg-primary px-3 py-2 rounded-xl"
          >
            Gönder
          </button>
        </div>
      </div>
    </div>
  )
}
