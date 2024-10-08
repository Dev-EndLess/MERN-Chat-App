import { useState } from "react"
import { useConversationsContext } from "../context/GlobalContext"
import toast from "react-hot-toast"

const useSendMessage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { messages, setMessages, selectedConversation } =
    useConversationsContext()

  const sendMessage = async (message) => {
    setIsLoading(true)

    try {
      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        },
      )

      const data = await res.json()
      if (data.error) throw new Error(data.error)

      setMessages([...messages, data])
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }
  return { sendMessage, isLoading }
}

export default useSendMessage
