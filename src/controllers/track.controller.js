const Track = require("../models/track.model");

const getAllTracks = (req, res) => {
  //* create the model to get all tracks
  Track.getAllTracks()
    .then((tracks) => {
      if (tracks !== null && tracks.length > 0) {
        res.status(200).send(tracks);
      } else {
        res.status(404).send("Tracks not found");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving tracks from database.");
    });
};

const getTrackById = (req, res) => {
  const id = Number(req.params.id);

  //* create the model to get a track by id
  Track.getById(id)
    .then((track) => {
      if (track !== null && track.length > 0) {
        res.status(200).send(track);
      } else {
        res.status(404).send(`Track not found with id ${id}`);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error retrieving a track from database.");
    });
};

const createNewTrack = (req, res) => {
  const { body } = req;

  // create the model to create a new track
  Track.createTrack(body)
    .then((results) => {
      if (results.affectedRows > 0) {
        res
          .status(201)
          .send(`Track created successfully with id ${results.insertId}`);
      } else {
        res.status(422).send("Unprocessable Entity - unable to process");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error creating an track in the db.");
    });
};

const editTrack = (req, res) => {
  const id = Number(req.params.id);

  const { body } = req;

  //* create the model to edit
  Track.edit(id, body)
    .then((results) => {
      if (results.changedRows > 0) {
        // res.status(200).send("Track successfully updated")
        res.status(202).send("Request Accepted - Track successfully updated");
        // res.sendStatus(202)
        // res.status(204).send("Track successfully updated")
        // res.sendStatus(204)
      } else {
        res.status(404).send(`Track not found with id: ${id}`);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error editing an track in the db.");
    });
};

const deleteTrack = (req, res) => {
  const id = Number(req.params.id);

  //* create the model to delete the track
  Track.deleteTrackById(id)
    .then((results) => {
      if (results.affectedRows > 0) {
        res.status(202).send(`Track deleted successfully with id: ${id}`);
      } else {
        res.status(404).send(`Track not found with id: ${id}`);
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error deleting an track in the db.");
    });
};

module.exports = {
  getAllTracks,
  getTrackById,
  createNewTrack,
  editTrack,
  deleteTrack,
};
