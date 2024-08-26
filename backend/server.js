import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoDBConnection from "./db/mongoDBConnection.js";

import authRouters from "./routes/auth.routes.js";
import messageRouters from "./routes/message.routes.js";
import userRouters from "./routes/user.routes.js";

const app = express();
const PORT = process.env.PORT || 5000

dotenv.config();

app.use(express.json()) // to parse the incoming requests with JSON payloads
app.use(cookieParser())

app.use("/api/auth", authRouters)
app.use("/api/messages", messageRouters)
app.use("/api/users", userRouters)

app.use((req, res, next) => {
  console.log("Request Method:", req.method);
  console.log("Request Headers:", req.headers);
  console.log("Request Body:", req.body);
  next();
});


app.listen(PORT, () => {
  mongoDBConnection()
  console.log(`Server started on port ${PORT}`)
})

