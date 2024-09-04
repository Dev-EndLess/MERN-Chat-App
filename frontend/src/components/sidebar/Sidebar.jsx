import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <hr className="border-emerald-200 my-4 opacity-60" />
      <Conversations />
      <hr className="border-emerald-200 my-4 opacity-60" />
      <LogoutButton />
    </div>
  )
}

export default Sidebar
