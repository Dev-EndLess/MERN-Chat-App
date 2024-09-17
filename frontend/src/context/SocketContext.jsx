import { createContext, useEffect, useState, useContext } from "react"
import { useAuthContext } from "./GlobalContext"
import io from "socket.io-client"

export const SocketContext = createContext()

export const useSocketContext = () => {
  return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null)
  const [onlineUsers, setOnlineUsers] = useState([])
  const [typingUser, setTypingUser] = useState(null)
  const { authUser } = useAuthContext()

  useEffect(() => {
    if (authUser) {
      const productionSocketUrl = "https://mern-chat-app-2pp4.onrender.com"
      // const developmentSocketUrl = "http://localhost:5000" // uncomment for development mode

      const socket = io(productionSocketUrl, {
        query: {
          userId: authUser._id,
        },
      })

      setSocket(socket)

      // socket.on() is used to listen to the events. can be used both on client and server side
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users)
      })

      // ascolto dell'evento "typing" per vedere chi sta scrivendo
      socket.on("typing", (userId) => {
        setTypingUser(userId)
      })

      // ascolto dell'evento "stop typing" per sapere quando l'utente ha smesso di scrivere
      socket.on("stop typing", () => {
        setTypingUser(null)
      })

      return () => socket.close()
    } else {
      if (socket) {
        socket.close()
        setSocket(null)
      }
    }
  }, [authUser])

  return (
    <SocketContext.Provider value={{ socket, onlineUsers, typingUser }}>
      {children}
    </SocketContext.Provider>
  )
}
