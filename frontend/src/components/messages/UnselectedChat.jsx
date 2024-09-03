import { TiMessages } from "react-icons/ti"
import { useAuthContext } from "../../context/GlobalContext"

const UnselectedChat = () => {
  const { authUser } = useAuthContext()

  return (
    <div className="flex flex-col h-full justify-center items-center text-center text-gray-200 font-semibold sm:text-lg md:text-xl">
      <p>Welcome 👋 {authUser.nickname} ❄</p>
      <p>Select a chat to start messaging</p>
      <TiMessages className="text-3xl md:text-6xl text-center text-emerald-200" />
    </div>
  )
}

export default UnselectedChat
