import { createContext, useContext, useState } from "react"

export const GlobalContext = createContext()

export const useAuthContext = () => {
  return useContext(GlobalContext)
}

export const useConversationsContext = () => {
  return useContext(GlobalContext)
}

export const GlobalContextProvider = ({ children }) => {
  /* * * Auth * * */
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("auth-user")) || null
  )

  /* * * Conversations * * */
  const [selectedConversation, setSelectedConversation] = useState(null)
  const [messages, setMessages] = useState([])

  return (
    <GlobalContext.Provider
      value={{
        authUser,
        setAuthUser,
        selectedConversation,
        setSelectedConversation,
        messages,
        setMessages,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
