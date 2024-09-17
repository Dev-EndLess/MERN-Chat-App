import { useEffect, useRef } from "react"
import { TiMessages } from "react-icons/ti"
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeleton/MessageSkeleton"
import Message from "./Message"
import { useListenMessages } from "../../hooks/useListenMessages"

const Messages = () => {
  const { isLoading, messages } = useGetMessages()
  useListenMessages()
  const lastMessageRef = useRef()

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="px-4 w-full h-screen md:h-[430px] overflow-y-auto">
      {!isLoading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {isLoading &&
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!isLoading && messages.length === 0 && (
        <div className="flex w-full h-full justify-center items-center">
          <p className="text-emerald-200 font-semibold text-lg">
            There are no message in this conversation
            <TiMessages className="text-3xl md:text-6xl mx-auto mt-2 text-emerald-200" />
          </p>
        </div>
      )}
    </div>
  )
}

export default Messages
