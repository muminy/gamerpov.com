const app = require("express")()
const server = require("http").Server(app)
const io = require("socket.io")(server)
const next = require("next")

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

let chats = []

io.on("connection", (socket) => {
  console.log("connected")
  socket.on("new-message", (data) => {
    chats.push(data)
    socket.emit("read:messages", chats)
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected")
  })
})

nextApp.prepare().then(() => {
  app.get("*", (req, res) => {
    return nextHandler(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
