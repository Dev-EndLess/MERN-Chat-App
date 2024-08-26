import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const protectedRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized - No Token Provided' })
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET)

    if(!verified) {
      return res.status(401).json({ error: 'Unauthorized - Invalid Token' })
    }

    const user = await User.findById(verified.userId).select('-password')

    if(!user) {
      return res.status(404).json({ error: 'User Not Found' })
    }

    console.log("Authenticated User:", user)
    req.user = user
    next()

  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message)
		res.status(500).json({ error: "Internal server error" })
  }
}

export default protectedRoute