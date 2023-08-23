const trackRouter = require("express").Router()

const trackController = require("../controllers/track.controller")

// as a user, I want to be able to see all songs.
//* endpoint: /tracks
// as a user, I want to list all the songs from an album.
//* endpoint: /tracks?album_id=13
trackRouter.get("/", trackController.getAllTracks)

// as a user, I want to be able to see an track by entering its id in the url.
//* endpoint: /tracks/:id
trackRouter.get("/:id", trackController.getTrackById)

// as a user, I want to create and assign a song to an album.
//* endpoint: /tracks
trackRouter.post("/", trackController.createNewTrack)


//* endpoint: 

// as a user, I want to edit a song from an album.
//* endpoint: /tracks/:id 
trackRouter.put("/:id", trackController.editTrack)  

// as a user, I want to delete a song.
//* endpoint: /tracks/:id
trackRouter.delete("/:id", trackController.deleteTrack)

module.exports = trackRouter