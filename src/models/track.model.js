const database = require("../database/database-config");

const getAllTracks = () => {
  return database.query("SELECT * FROM track").then(([results]) => results);
};

const getById = (id) => {
  return database
    .query("SELECT * FROM track WHERE id = ?", id)
    .then(([results]) => results);
};

const createTrack = (body) => {
  return database
    .query("INSERT INTO track SET ?", body)
    .then(([results]) => results);
};

const edit = (id, body) => {
  return database
    .query("UPDATE track SET ? WHERE id = ?", [body, id])
    .then(([results]) => results);
};

const deleteTrackById = (id) => {
  return database
    .query("DELETE FROM track WHERE id = ?", id)
    .then(([results]) => results);
};

const getAllTracksByAlbum = (albumId) => {
  return database
    .query("SELECT id, title, duration FROM  track WHERE album_id = ?", albumId)
    .then(([results]) => results);
};

module.exports = {
  getAllTracks,
  getById,
  createTrack,
  edit,
  deleteTrackById,
  getAllTracksByAlbum,
};
