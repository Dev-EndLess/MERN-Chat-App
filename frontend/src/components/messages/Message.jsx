import {
  useAuthContext,
  useConversationsContext,
} from "../../context/GlobalContext"
import { extractTime } from "../../utils/extractTime"

const Message = ({ message }) => {
  const { authUser } = useAuthContext()
  const { selectedConversation } = useConversationsContext()
  const formattedTime = extractTime(message.createdAt)
  const isSentByCurrentUser = message.senderId === authUser._id
  const messageAlignment = isSentByCurrentUser ? "chat-end" : "chat-start"
  const profileAvatar = isSentByCurrentUser
    ? authUser.avatar
    : selectedConversation?.avatar
  const backgroundProfileAvatar = isSentByCurrentUser
    ? "bg-emerald-100"
    : "bg-gray-300"
  const myMessageBackground = isSentByCurrentUser
    ? "bg-emerald-100"
    : "bg-gray-300"

  return (
    <div>
      <div className={`chat ${messageAlignment}`}>
        <div className="chat-image avatar">
          <div className="rounded-xl w-16">
            <img
              alt="Profile Avatar"
              className={`bg-emerald-100" ${backgroundProfileAvatar}`}
              src={profileAvatar}
            />
          </div>
        </div>

        <div className="chat-header text-white">{message.senderId}</div>
        <div
          className={`flex chat-bubble text-black font-semibold ${myMessageBackground}`}
        >
          <h3>{message.text}</h3>
        </div>

        <h4 className="text-gray-400 font-semibold mt-1">{formattedTime}</h4>
      </div>
    </div>
  )
}

export default Message
