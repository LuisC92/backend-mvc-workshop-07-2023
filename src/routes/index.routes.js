const albumRouter = require("./album.routes")
const trackRouter = require("./track.routes")

const setupRoutes = (server) =>{
    server.use("/albums", albumRouter)
    server.use("/tracks", trackRouter)
}

module.exports = {
    setupRoutes
}