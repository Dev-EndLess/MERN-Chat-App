import { useConversationsContext } from "../../context/GlobalContext"
import { useSocketContext } from "../../context/SocketContext"

function Conversation({ conversation }) {
  const { selectedConversation, setSelectedConversation, isHide, setIsHide } = useConversationsContext()

  const isSelected = selectedConversation?._id === conversation._id
  const { onlineUsers } = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)

  const handleClick = () => {
    setSelectedConversation(conversation)
    setIsHide(false)
  }

  return (
    <div>
      <div
        className={`flex gap-3 py-2 px-3 mx-2 items-center text-emerald-200 hover:text-neutral-900 hover:bg-gray-300 rounded cursor-pointer ${
          isSelected && isHide === false ? "bg-gradient-to-br from-neutral-900 via-emerald-200 to-neutral-900 shadow-custom-emerald text-neutral-900" : ""
        }`}
        onClick={handleClick}
      >
        <div className={`avatar border-2 rounded-full border-neutral-700 ${isOnline ? 'online ' : 'offline'}`}>
          <div className="w-12 rounded-full bg-gray-300">
            <img src={conversation.avatar} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold">{conversation.nickname}</p>
            <span className="text-xl">🎲</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conversation
