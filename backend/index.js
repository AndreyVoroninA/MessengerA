const http = require('http')
const socketIo = require('socket.io')

const server = http.createServer()

const io = socketIo(server, {
  cors: '*'
})
const array_id = []
 
io.on('connection', (socket) => {
  console.log('connected')
  console.log(socket.id)
 /* if (array_id.length >= 2) {
     console.log("Чат переполнен!")
  } else  {
     array_id.push(socket.id)
  }*/
  socket.on('message', (data) => {
    console.log('message: ', data)
    
    setTimeout(() => {
      io.emit('message', data)
    }, 1000)
  })
})

 
 server.listen(3001, () => {
   console.log('server started...')
 })