// const express = require('express');
const albumRouter = require('express').Router()
const AlbumController = require("../controllers/album.controller")

//* as a user, I want to be able to see all albums.
//* endpoint: /albums
albumRouter.get("/", AlbumController.getAllAlbums)

// as a user, I want to list all the songs from an album.
//* endpoint: /albums/:id/tracks
albumRouter.get("/:id/tracks", AlbumController.getAllTracksFromAlbum)

// as a user, I want to be able to see an album by entering its id in the url.
//* endpoint: /albums/:id
albumRouter.get("/:id", AlbumController.getAlbumById)

// as a user, I want to be able to create a new album.
//* endpoint: /albums
albumRouter.post("/", AlbumController.createAlbum)

// as a user, I want to be able to modify an album.
//* endpoint: /albums/:id
albumRouter.put("/:id", AlbumController.editAlbum)

// as a user, I want to be able to delete an album.
//* endpoint: /albums/:id
albumRouter.delete("/:id", AlbumController.deleteAlbum)


module.exports = albumRouter