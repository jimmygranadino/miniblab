// require my NPM stuff
let Express = require('express')
let app = Express()
let server = require('http').createServer(app)
let Vue = require('vue/dist/vue.js')
//const { isObject } = require('core-js/fn/object') // this appeared when I used .emit from socket.io but crashes my app when enabled so pointless since works without it
let SocketIO = require('socket.io')(server)
require('dotenv').config()

// vue components
// Vue.component('navbar', require('./views/components/Navbar.vue'))

// initialize for use
// app.set('view engine', 'vuexpress')
// app.use('/npm', Express.static('node_modules'))
// app.use(Express.static('app'))

// some basic routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/test.html')
})

SocketIO.on('connection', (socket) => {
    socket.on('message', (msg) => {
        SocketIO.emit('message', msg)
    })
    console.log('🦦 user online 🦦')
    socket.on('🌊 disconnected 🌊', () => {
        console.log('')
    })
})

server.listen(process.env.PORT || 5000, () => {
    console.log(`🦥 spun up on ${process.env.PORT || 5000}`)
})