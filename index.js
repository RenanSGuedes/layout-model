const http = require('http')
const express = require('express')
const app = express()

const url = new URL('http://127.0.0.1:8085/')

const server = http.createServer(app)
const io = require('socket.io').listen(server)
const nunjucks = require('nunjucks')
const path = require('path')

nunjucks.configure({
  autoescape: true,
  express: app
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

server.listen(url.port, () => console.log(`Server is running on ${url.href}`))

app.get('/', (req, res) => {
  res.render(path.join(__dirname, 'public', 'index.html'))
})

io.on('connect', (socket) => {
  console.log('A user connected')
  socket.on('disconnect', () => {
    setInterval(() => {
      const time = Date()
      const hms = time.split(' ').map(e => e.trim())[4].split(':').map(i => i.trim())

      io.emit('get hour', hms)
    }, 1000)
  })
})
