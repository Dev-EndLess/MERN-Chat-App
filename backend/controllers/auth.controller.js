import bcrypt from "bcryptjs"
import generateJwtToken from "../utils/generateJwtToken.js"
import User from "../models/user.model.js"

export const signup = async (req, res) => {
  try {
    const { username, nickname, password, confirmPassword, gender } = req.body

    if (!password) {
      return res.status(400).json({ error: "Please enter a password" })
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords don't Match" })
    }

    const existingUser = await User.findOne({ username })

    if (existingUser) {
      return res.status(400).json({ error: "Username Already Exists" })
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const maleAvatar = `https://images.vexels.com/content/140752/preview/male-profile-avatar-5-227506.png`
    const femaleAvatar = `https://images.vexels.com/media/users/3/140384/isolated/preview/fa2513b856a0c96691ae3c5c39629f31-maedchen-profil-avatar-1.png`

    const newUser = new User({
      username,
      nickname,
      password: hashedPassword,
      gender,
      avatar: gender === "male" ? maleAvatar : femaleAvatar,
    })

    if (newUser) {
      // Generate JWT
      generateJwtToken(newUser._id, res)

      await newUser.save()

      res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        nickname: newUser.nickname,
        avatar: newUser.avatar,
      })
    } else {
      res.status(400).json({ error: "Invalid User Data" })
    }
  } catch (error) {
    console.log("Error in Signup Controller", error.message)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(400).json({ error: "Invalid Username" })
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || "",
    )

    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Password" })
    }

    generateJwtToken(user._id, res)

    res.status(200).json({
      _id: user._id,
      username: user.username,
      nickname: user.nickname,
      avatar: user.avatar,
    })
  } catch (error) {
    console.log("Error in Login Controller", error.message)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 })
    res.status(200).json({ message: "Logged Out Successfully" })
  } catch (error) {
    console.log("Error in Logout Controller", error.message)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
