import React from "react"
import { IoReturnDownBackSharp } from "react-icons/io5"
import { useConversationsContext } from "../../context/GlobalContext"

const MessageHeader = ({ selectedConversation }) => {
  const { setIsHide } = useConversationsContext()
  const handleHide = () => {
    setIsHide(true)
  }

  return (
    <div className="sticky top-0 z-10 w-full bg-gradient-to-l from-neutral-900 via-emerald-200 to-neutral-900 rounded-t-md px-4 py-1.5">
      <span className="text-emerald-200">To : </span>
      <span className="text-emerald-200 font-bold">
        {selectedConversation.nickname}
      </span>
      <div
        className="md:hidden absolute mx-2 right-2 top-2 cursor-pointer"
        onClick={handleHide}
      >
        <IoReturnDownBackSharp className="text-2xl font-bold text-emerald-200" />
      </div>
    </div>
  )
}

export default MessageHeader
