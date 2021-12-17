import express, { Express } from 'express'
import socket, { Server } from 'socket.io'

const PORT = 8000

const app: Express = express()

const server = app.listen(PORT, () => {
  console.info(`server is listening on port ${PORT}`)
  console.info(`http://localhost:${PORT}`)
})

const io = new socket.Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})

io.on('connection', (socket) => {
  socket.emit('connection', null)
  console.info('new user connected')
  console.info(socket.id)
})
