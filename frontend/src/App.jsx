import "./App.css"
import SignUp from "./pages/signup/SignUp"
import Login from "./pages/login/Login"
import Home from "./pages/home/Home"
import { Toaster } from "react-hot-toast"
import { Navigate, Route, Routes } from "react-router-dom"
import { useAuthContext } from "./context/AuthContext"

function App() {
  const { authUser } = useAuthContext()
  return (
    <div className="w-full h-screen p-4">
      <Routes>
        <Route
          exact
          path="/"
          element={authUser ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/signup"
          element={authUser ? <Navigate to="/login" /> : <SignUp />}
        />
        <Route
          exact
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
      <Toaster position="bottom-center" />
    </div>
  )
}

export default App
