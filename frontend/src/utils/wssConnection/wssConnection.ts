import socketClient, { Socket } from 'socket.io-client'

const SERVER = 'http://localhost:8000'

let socket: Socket

export const connectionWithWebSocket = () => {
  socket = socketClient(SERVER)
  socket.on('connection', () => {
    console.info('succesfully connected with wss server')
    console.info(socket.id)
  })
}
