import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { GlobalContextProvider } from "./context/GlobalContext"
import { SocketContextProvider } from "./context/SocketContext.jsx"
import App from "./App.jsx"
import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
