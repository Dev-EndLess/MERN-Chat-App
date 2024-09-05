import { useEffect } from "react"

import { useSocketContext } from "../context/SocketContext"
import { useConversationsContext } from "../context/GlobalContext"

export const useListenMessages = () => {
  const { socket } = useSocketContext()
  const { messages, setMessages } = useConversationsContext()

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage])
    })
  }, [socket, messages, setMessages])
}