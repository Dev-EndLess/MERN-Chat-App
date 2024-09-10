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
          className={`chat-bubble text-black font-semibold ${myMessageBackground}`}
        >
          {message.text}
        </div>
        <div className="chat-footer text-gray-200">{formattedTime}</div>
      </div>
    </div>
  )
}

export default Message
