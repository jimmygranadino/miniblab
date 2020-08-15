// get my NPM stuff
let Express = require('express')
require('dotenv').config()

// initialize for use
let app = Express()
let server = require('http').createServer(app)

app.get('/', (req, res) => {
    res.send(`🦉 what a hoot 🦉`)
})

server.listen(process.env.PORT || 5000, () => {
    console.log(`🦥 spun up on ${process.env.PORT || 5000}`)
})