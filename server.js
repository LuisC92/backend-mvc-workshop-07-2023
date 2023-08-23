const express = require('express')
require('dotenv').config()

const { setupRoutes } = require('./src/routes/index.routes')

const server = express()
server.use(express.json())


const port = process.env.PORT

setupRoutes(server)

server.get("/", (req, res)=>{
    res.send("Welcome to my Albums and Tracks server!")
})


server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})