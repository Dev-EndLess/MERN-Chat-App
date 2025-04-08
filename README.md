# MERN Chat App Demo

<a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="45" height="45" alt="MongoDB" /></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" width="48" height="48" alt="Express" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="45" height="45" alt="React" /></a>
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="45" height="45" alt="NodeJS" /></a>

This project is a full-stack chat application built using modern technologies like React for the frontend and Node.js with Express for the backend. The project is divided into two main folders: backend and frontend, with real-time data handling powered by Socket.IO.

## ⚙️ Technologies ⚙️

### 💻 Frontend 💻
  * React: For building an interactive and dynamic user interface.
  * Tailwind CSS: For styling the frontend with a utility-first approach.
  * Socket.IO: For real-time communication between the client and server.
  * DaisyUI: A Tailwind CSS component library for easily customizable UI components.
  * Toast: For displaying notifications to the user.

### 🖥️ Backend 🖥️
  * Node.js with Express: For handling the server and REST APIs.
  * MongoDB with Mongoose: As a NoSQL database to store messages, users, and other relevant information.
  * Socket.IO: For managing real-time connections between the client and server.
  * bcryptjs: For password hashing.
  * jsonwebtoken (JWT): For user authentication.
  * dotenv: For managing environment variables.
  * cookie-parser: For handling cookies in the authentication flow.


## ⬇️ Installation ⬇️

1️⃣ Clone repository in your local machine

```bash
git clone https://github.com/Dev-EndLess/MERN-Chat-App.git
```

After that you can install the dependencies in frontend and backend directory (npm install)

/MERN-Chat-App/backend

/MERN-Chat-App/frontend

---


2️⃣ Now create a .env file to configure environment variables

```
PORT=8000
MONGO_DB_URI=mongodb+srv://username:db_password@cluster0.vo0ln.mongodb.net/MERN_Chat_App?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET="a secret key"
NODE_ENV=development
```

⚠️ Note: For MONGO_DB_URI, you need replace "username" and "db_password" with your MongoDB credentials

⚠️ Note: Nota: Il JWT_SECRET è una chiave segreta utilizzata per firmare i JSON Web Tokens (JWT). È necessario per l'autenticazione degli utenti nel sistema. Puoi generare una chiave segreta casuale nel terminale con il seguente comando:

```
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

---

3️⃣ Prepare app for development Mode

Go to backend/socket/socket.js and just delete or comment line 10 

![socket](https://github.com/user-attachments/assets/9d849664-9c81-43ec-b96c-97c15414a385)

Go to frontend/src/context/SocketContext.jsx and delete or comment line 19 and change variable at line 22 with developmentSocketUrl

![socketcontext](https://github.com/user-attachments/assets/e3f3d12d-8f28-4206-8e0c-6ac315165e9d)

 
4️⃣ Launch the Application 

/MERN-Chat-App/backend
```
npm run server
```
/MERN-Chat-App/frontend
```
npm run dev
```

##

### License 

 ⚖️ MIT License

##

### 🚀 Go to [Live Chat App](https://mern-chat-app-2pp4.onrender.com/login)

![1](https://github.com/user-attachments/assets/f793cba1-80d7-4b13-b8a4-02316c1a125e)
![2](https://github.com/user-attachments/assets/c0a0f96d-5408-4ebb-9354-4ad38d0cf379)
![3](https://github.com/user-attachments/assets/7276dfc8-98a8-47e6-be36-e722003d64aa)
