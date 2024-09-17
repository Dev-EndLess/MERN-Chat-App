import { useConversationsContext } from "../../context/GlobalContext"
import UnselectedChat from "./UnselectedChat"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { useEffect } from "react"
import { useSocketContext } from "../../context/SocketContext"
import useGetMessages from "../../hooks/useGetMessages"
import MessageHeader from "./MessageHeader"

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversationsContext()
  const { isLoading, messages } = useGetMessages()
  const { typingUser } = useSocketContext()

  // useEffect(() => {
  //   /* * unmount component * */
  //   return () => setSelectedConversation(null)
  // }, [])

  return (
    <div className="h-full overflow-y-auto md:overflow-hidden">
      {selectedConversation ? (
        <div>
          <MessageHeader selectedConversation={selectedConversation} />
          <Messages />
          <MessageInput selectedConversationId={selectedConversation._id} />
        </div>
      ) : (
        <UnselectedChat />
      )}
    </div>
  )
}

export default MessageContainer
