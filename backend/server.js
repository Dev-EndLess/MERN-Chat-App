import path from "path"
import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import mongoDBConnection from "./db/mongoDBConnection.js"

import authRouters from "./routes/auth.routes.js"
import messageRouters from "./routes/message.routes.js"
import userRouters from "./routes/user.routes.js"
import { app, server } from "./socket/socket.js"

const PORT = process.env.PORT || 5000

const __dirname = path.resolve()

dotenv.config()

app.use(express.json()) // to parse the incoming requests with JSON payloads
app.use(cookieParser())

app.use("/api/auth", authRouters)
app.use("/api/messages", messageRouters)
app.use("/api/users", userRouters)

/* * Serve static files/assets from the frontend build directory * */
app.use(express.static(path.join(__dirname, "/frontend/dist")))
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

server.listen(PORT, () => {
  mongoDBConnection()
  console.log(`Server started on port ${PORT}`)
})