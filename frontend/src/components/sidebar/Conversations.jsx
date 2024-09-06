import useGetConversations from "../../hooks/useGetConversations"
import Conversation from "./Conversation"
import { useConversationsContext } from "../../context/GlobalContext"

function Conversations() {
  // const { isLoading, conversations } = useGetConversations()
  const { isLoading, filteredConversations } = useConversationsContext()

  return (
    <div className="flex md:h-[380px] flex-col py-2 overflow-y-auto">
      {filteredConversations.map((conversation, index) => (
        <Conversation key={index} conversation={conversation} />
      ))}
      {isLoading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  )
}

export default Conversations
