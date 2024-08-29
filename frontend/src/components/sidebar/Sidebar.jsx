import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div className="w-full">
      <SearchInput />
      <hr className="border-slate-500 my-4" />
      <Conversations />
      <hr className="border-slate-500 my-4" />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
