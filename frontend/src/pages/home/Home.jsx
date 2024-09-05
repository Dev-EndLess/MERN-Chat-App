import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="flex">
      <div className="w-full h-full sm:w-72 px-3 shadow-custom-emerald rounded-lg overflow-hidden bg-gray-400 backdrop-blur-lg bg-opacity-0">
        <Sidebar />
      </div>
      <div className="hidden lg:block lg:w-4"></div>
      <div className="hidden lg:block lg:w-[600px] shadow-custom-emerald rounded-lg overflow-hidden bg-gray-400 backdrop-blur-lg bg-opacity-0">
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home
