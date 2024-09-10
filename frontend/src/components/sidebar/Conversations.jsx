import Conversation from "./Conversation"
import useGetConversations from "../../hooks/useGetConversations"
import { useSocketContext } from "../../context/SocketContext"
import { useConversationsContext } from "../../context/GlobalContext"

function Conversations() {
  const { isLoading, filteredConversations } = useConversationsContext()
  const { onlineUsers } = useSocketContext()

  const sortedConversations = [...filteredConversations].sort((a, b) => {
    const isAOnline = onlineUsers.includes(a._id.toString())
    const isBOnline = onlineUsers.includes(b._id.toString())

    // Se A è online e B no, A viene prima
    if (isAOnline && !isBOnline) return -1
    // Se B è online e A no, B viene prima
    if (!isAOnline && isBOnline) return 1
    // Se entrambi sono online o offline, l'ordine non cambia
    return 0
  })

  return (
    <div className="flex md:h-[380px] flex-col py-2 overflow-y-auto">
      {sortedConversations.map((conversation, index) => (
        <Conversation key={index} conversation={conversation} />
      ))}
      {isLoading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  )
}

export default Conversations
