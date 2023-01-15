import { useEffect } from "react"
import io from "socket.io-client"

const socket = io()

type UseSocketType<T> = {
  eventName: string
  callBack?: (value: T) => void
}

export default function useSocket<T>({
  callBack = () => {},
  eventName,
}: UseSocketType<T>) {
  useEffect(() => {
    socket.on(eventName, callBack)

    return function useSocketCleanup() {
      socket.off(eventName, callBack)
    }
  }, [eventName, callBack])

  return socket
}
