const Album = require("../models/album.model");
const Track = require("../models/track.model");

const getAllAlbums = (req, res) => {
  Album.getAll()
    .then((albums) => {
      if (albums !== null && albums.length > 0) {
        res.status(200).send(albums);
      } else {
        res.status(404).send("Albums not found");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving albums from database.");
    });
};

const getAlbumById = (req, res) => {
  const id = Number(req.params.id);

  // console.log("id in controller", id)

  // create the model to get query album by id
  Album.getById(id)
    .then((album) => {
      if (album !== null && album.length > 0) {
        res.status(200).send(album);
      } else {
        res.status(404).send(`No album found with id: ${id}`);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving album by id from db.");
    });
};

const createAlbum = (req, res) => {
  // console.log("Body", req.body);

  // create the model to insert body in database
  Album.createNewAlbum(req.body)
    .then((results) => {
      if (results.affectedRows > 0) {
        res
          .status(201)
          .send(
            `A new album was been created successfully with id: ${results.insertId}`
          );
      } else {
        // status: 422 Unprocessable Content
        // 422 Unprocessable Content response status code indicates
        // that the server understands the content type of the request entity,
        // and the syntax of the request entity is correct,
        // but it was unable to process the contained instructions.
        res.status(422).send("Unprocessable Entity - unable to process");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error creating an album in the db.");
    });
};

const editAlbum = (req, res) => {
  const id = Number(req.params.id);
  // console.log("id", id)

  const {body} = req
  // console.log("body", body)

  // create the model to edit the album
  Album.edit(id, body)
    .then((results) => {
      if(results.changedRows > 0){
        // res.status(200).send("Album successfully updated")
        res.status(202).send("Request Accepted - Album successfully updated")
        // res.sendStatus(202)
        // res.status(204).send("Album successfully updated")
        // res.sendStatus(204)
      } else {
        res.status(404).send(`Album not found with id: ${id}`)
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error editing an album in the db.");
    });
}

const deleteAlbum = (req, res) => {
  
  const id = Number(req.params.id)

  //* create the model to delete the album
  Album.deleteAlbumById(id)
    .then((results)=> {
      if(results.affectedRows > 0){
        res.status(202).send(`Album deleted successfully with id: ${id}`)
      } else {
        res.status(404).send(`Album not found with id: ${id}`)
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error deleting an album in the db.");
    });
}

const getAllTracksFromAlbum = (req, res) =>{
 const albumId = Number(req.params.id)

  //* create the model to get all tracks by album
  Track.getAllTracksByAlbum(albumId)
    .then((tracks) => {
      if (tracks !== null && tracks.length > 0) {
        res.status(200).send(tracks);
      } else {
        res.status(404).send(`Tracks not found for the album with id ${albumId}`);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving tracks from album from database.");
    });

}


module.exports = {
  getAllAlbums,
  getAlbumById,
  createAlbum,
  editAlbum,
  deleteAlbum,
  getAllTracksFromAlbum,
};
