import { useConversationsContext } from "../../context/GlobalContext"
import UnselectedChat from "./UnselectedChat"
import MessageInput from "./MessageInput"
import Messages from "./Messages"
import { useEffect } from "react"

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } =
    useConversationsContext()

  useEffect(() => {
    /* * unmount component * */
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className="h-full">
      {selectedConversation ? (
        <div className="w-full h-full">
          <div className="bg-gradient-to-l from-neutral-900 via-emerald-200 to-neutral-900 rounded-t-md px-4 py-2 mb-2 mt-0">
            <span className="text-emerald-200">To : </span>
            <span className="text-emerald-200 font-bold">
              {selectedConversation.nickname}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </div>
      ) : (
        <UnselectedChat />
      )}
    </div>
  )
}

export default MessageContainer
