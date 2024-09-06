import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div className="relative h-full">
      <SearchInput />
      <hr className="border-emerald-200 my-4 opacity-60" />
      <Conversations />
      <div className="absolute bottom-0 w-full my-8">
        <hr className="border-emerald-200 my-4 opacity-60" />
        <LogoutButton />
      </div>
    </div>
  )
}

export default Sidebar
