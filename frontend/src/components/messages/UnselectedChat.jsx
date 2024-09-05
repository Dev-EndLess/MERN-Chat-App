import { TiMessages } from "react-icons/ti"
import { useAuthContext } from "../../context/GlobalContext"

const UnselectedChat = () => {
  const { authUser } = useAuthContext()

  return (
    <div className="flex flex-col h-full justify-center items-center text-center text-emerald-200 font-semibold sm:text-lg md:text-xl">
      <p className="text-2xl">
        Welcome 
        <span className="text-gray-300 text-3xl"> {authUser.nickname}</span>
      </p>
      <div className="flex flex-col justify-center items-center mt-2">
        <p className="text-emerald-200" >Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center mt-1 text-emerald-200" />
      </div>
    </div>
  )
}

export default UnselectedChat
