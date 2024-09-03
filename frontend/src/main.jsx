import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { GlobalContextProvider } from "./context/GlobalContext"
import App from "./App.jsx"
import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
    </BrowserRouter>
  </StrictMode>
)
