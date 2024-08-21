import jwt from "jsonwebtoken"

const generateJwtToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  })

  res.cookie("JWT", token, {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
  })
}

export default generateJwtToken;