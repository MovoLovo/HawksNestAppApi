const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

const port = 3000

const app = express()
const server = http.createServer(app)
const io = socketIo(server)

io.on('connection', socket => {
  console.log(`A user has connected`)

  socket.on('disconnect', () => {
    console.log(`A user disconnected`)
  })
})

server.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})