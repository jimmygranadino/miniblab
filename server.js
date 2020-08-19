// require my NPM stuff
let Express = require('express')
let app = Express()
let server = require('http').createServer(app)
let Vue = require('vue/dist/vue.js')
//const { isObject } = require('core-js/fn/object') // this appeared when I used .emit from socket.io but crashes my app when enabled so pointless since works without it
let io = require('socket.io')(server)
require('dotenv').config()

// initialize for use
// app.set('view engine', 'vuexpress')
// app.use(Express.static('app'))

// some basic routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/test.html')
})

let username = []

io.on('connection', (socket) => {

    let chat = []
    
    socket.on('message', (msg) => {
        let newChat = { 
            chat: msg.message,
            username: msg.user
        }
        chat.push(newChat)
        socket.emit('message', msg)
    })
    console.log('🦦 user online 🦦')
    socket.on('new user', (user) => {
        username.push({ username: user })
        socket.emit('new user', user)
    })
    socket.on('user', (user) => {
        socket.emit('user', user)
    })
})

server.listen(process.env.PORT || 5000, () => {
    console.log(`🦥 spun up on ${process.env.PORT || 5000}`)
})