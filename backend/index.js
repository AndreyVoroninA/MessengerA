const http = require('http')
const socketIo = require('socket.io')

const server = http.createServer()

const io = socketIo(server, {
  cors: '*'
})
const array_id = []
 
io.on('connection', (socket) => {
  console.log('connected: ' + socket.id)
  if (array_id.length >= 2) {
     console.log("ЧАТ CЛОМАЛСЯ :( ЗАШЛО МНОГО ЛЮДЕЙ, ПЕРЕЗАПУСТИТЕ BACK и FRONT!")
     io.emit('connected', "ЧАТ CЛОМАЛСЯ :( ЗАШЛО МНОГО ЛЮДЕЙ, ПЕРЕЗАПУСТИТЕ BACK и FRONT!")
  } else  {
     array_id.push(socket.id)
     io.emit('connected', socket.id)
  }
  socket.on('message', (data) => {
    console.log('message: ', data)
    
   
      io.emit('message', [data, socket.id])
    
  })
  socket.on('tooo', (data) => {
        socket.broadcast.emit('tooo', data)
  })
})

 
 server.listen(3001, () => {
   console.log('server started...')
 })