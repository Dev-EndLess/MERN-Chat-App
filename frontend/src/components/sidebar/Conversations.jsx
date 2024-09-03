import useGetConversations from "../../hooks/useGetConversations"
import Conversation from "./Conversation"
function Conversations() {
  const { isLoading, conversations } = useGetConversations()

  return (
    <div className="flex flex-col py-2 h-96 overflow-y-auto">
      {conversations.map((conversation, index) => (
        <Conversation key={index} conversation={conversation} />
      ))}
      {isLoading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  )
}

export default Conversations
