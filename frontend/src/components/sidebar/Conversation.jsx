import { useConversationsContext } from "../../context/GlobalContext"

function Conversation({ conversation }) {
  const { selectedConversation, setSelectedConversation } = useConversationsContext()

  const isSelected = selectedConversation?._id === conversation._id

  return (
    <div>
      <div
        className={`flex gap-3 py-2 px-3 items-center text-emerald-200 hover:text-neutral-900 hover:bg-gray-300 rounded cursor-pointer ${
          isSelected ? "bg-neutral-800 text-gray-200" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar offline">
          <div className="w-12 rounded-full bg-gray-300">
            <img src={conversation.avatar} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between ">
            <p className="font-bold">{conversation.nickname}</p>
            <span className="text-xl">🎲</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conversation
