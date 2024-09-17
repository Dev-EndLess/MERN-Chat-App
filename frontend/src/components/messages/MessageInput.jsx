import { useState, useEffect } from "react"
import { BsSend } from "react-icons/bs"
import useSendMessage from "../../hooks/useSendMessage"
import { useSocketContext } from "../../context/SocketContext"
import { useConversationsContext } from "../../context/GlobalContext"

const MessageInput = ({ selectedConversationId }) => {
  const [message, setMessage] = useState("")
  const { socket, typingUser } = useSocketContext()
  const { loading, sendMessage } = useSendMessage()
  const { selectedConversation } = useConversationsContext()

  useEffect(() => {
    let typingTimeout

    const handleTyping = () => {
      if (selectedConversationId) {
        socket.emit("typing", selectedConversationId)
      }

      clearTimeout(typingTimeout)
      typingTimeout = setTimeout(() => {
        if (selectedConversationId) {
          socket.emit("stop typing", selectedConversationId)
        }
      }, 2000)
    }

    if (message) {
      handleTyping()
    } else if (selectedConversationId) {
      socket.emit("stop typing", selectedConversationId)
    }

    return () => clearTimeout(typingTimeout)
  }, [message, selectedConversationId, socket])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!message) return
    await sendMessage(message)
    setMessage("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative m-4">
        <div className="w-full h-6">
          {typingUser === selectedConversation._id && (
            <div className="m-2 text-gray-200">
              <span className="text-emerald-200 font-semibold">
                Sta scrivendo un messaggio...
              </span>
            </div>
          )}
        </div>
        <input
          type="text"
          className="border text-sm rounded-lg block h-10 w-full p-3 bg-gray-700 border-gray-600 text-emerald-200 focus:border-emerald-200 focus:outline-none"
          placeholder="Send a message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button
          type="submit"
          className="absolute top-9 right-3 text-lg text-emerald-200"
        >
          {loading ? (
            <div className="loading loading-spinner"></div>
          ) : (
            <BsSend />
          )}
        </button>
      </form>
    </div>
  )
}

export default MessageInput
