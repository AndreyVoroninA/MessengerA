const http = require('http')
const { disconnect } = require('process')
const socketIo = require('socket.io')

const server = http.createServer()

const io = socketIo(server, {
  cors: '*'
})
let numId = 0;
 
io.on('connection', (socket) => {
  console.log('connected: ' + socket.id)
  if (numId >= 2) {
     console.log("Чат переполнен... :( !")
     io.emit('overflow', socket.id)
     socket.disconnect();
  } else  {
    numId++;
     io.emit('connected', socket.id)
  }
  socket.on('message', (data) => {
    console.log('message: ', data)
    
   
      io.emit('message', [data, socket.id])
    
  })
  socket.on('tooo', (data) => {
        socket.broadcast.emit('tooo', data)
  })
  socket.on('end', (data) => {
    socket.broadcast.emit('end', data)
})
  socket.on('disconnect', (data) => {
    console.log('disconnect')
    numId--;
  })
})

 
 server.listen(3001, () => {
   console.log('server started...')
 })