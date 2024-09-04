import { useState, useEffect } from "react"
import { IoSearchSharp } from "react-icons/io5"
import { useConversationsContext } from "../../context/GlobalContext"
import useGetConversations from "../../hooks/useGetConversations"
import toast from "react-hot-toast"

const SearchInput = () => {
  const [search, setSearch] = useState("")
  const { conversations } = useGetConversations()
  const { setSelectedConversation, setFilteredConversations } =
    useConversationsContext()

  useEffect(() => {
    if (search.length >= 1) {
      const filtered = conversations.filter((conversation) =>
        conversation.nickname.toLowerCase().startsWith(search.toLowerCase()),
      )
      setFilteredConversations(filtered)
    } else {
      setFilteredConversations(conversations)
    }
  }, [search, conversations])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!search) return
    if (search.length < 1) {
      return toast.error("Search term must be at least 2 characters")
    }

    const searchUser = conversations.find((conversation) =>
      conversation.nickname.toLowerCase().includes(search.toLowerCase()),
    )

    if (searchUser) {
      setSelectedConversation(searchUser)
      setSearch("")
    } else {
      toast.error("User not found")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center gap-2 mt-4">
        <input
          type="text"
          placeholder="Search…"
          className="input input-bordered w-full rounded-lg bg-neutral-800 text-emerald-200"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button
          type="submit"
          className="btn btn-circle bg-gray-200 border-none hover:bg-emerald-200"
        >
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  )
}

export default SearchInput
