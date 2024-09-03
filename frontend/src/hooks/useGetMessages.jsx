import { useEffect, useState } from "react"
import { useConversationsContext } from "../context/GlobalContext"
import toast from "react-hot-toast"

const useGetMessages = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useConversationsContext()

  useEffect(() => {
    const getMessages = async () => {
      setIsLoading(true)

      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`)
        const data = await res.json()

        if (data.error) {
          throw new Error(data.error)
        }

        setMessages(data)
      } catch (error) {
        toast.error(error.message)
      } finally {
        setIsLoading(false)
      }
    }
    if (selectedConversation?._id) getMessages()
  }, [selectedConversation?._id, setMessages])

  return { isLoading, messages }
}

export default useGetMessages
