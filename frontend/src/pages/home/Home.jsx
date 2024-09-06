import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
    <div className="h-full flex justify-center md:h-[560px]">
      <div className="w-full h-full md:w-72 px-3 shadow-custom-emerald rounded-lg overflow-hidden bg-gray-400 backdrop-blur-lg bg-opacity-0">
        <Sidebar />
      </div>
      <div className="hidden md:block md:w-4"></div>
      <div className="hidden md:block md:w-[450px] lg:w-[700px] shadow-custom-emerald rounded-lg overflow-hidden bg-gray-400 backdrop-blur-lg bg-opacity-0">
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home
