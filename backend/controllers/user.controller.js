import User from "../models/user.model.js"

export const getUsersSideBar = async (req, res) => {
  try {
    const loggedInUser = req.user._id

    /* ne = not equal - see https://www.mongodb.com/docs/manual/reference/operator/query/ */
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUser },
    }).select("-password")

    res.status(200).json(filteredUsers)
  } catch (error) {
    console.error({ "Error in getUsersSideBar: ": error.message })
    res.status(500).json({ error: "Internal Server Error" })
  }
}
