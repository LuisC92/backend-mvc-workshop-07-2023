const database = require("../database/database-config");

const getAll = () => {
  return database.query("SELECT * FROM album").then(([results]) => results);
};

const getById = (id) => {
  // console.log("id in model", id)
  return database
    .query("SELECT * FROM album WHERE id = ?", id)
    .then(([results]) => results);
};

const createNewAlbum = (album) => {
  //   const { title, release_date, artist, genre, picture } = album;

  return (
    database
      .query("INSERT INTO album SET ?", [album])
      // .query(
      //   "INSERT INTO album (title, release_date, artist, genre, picture) VALUES (?,?,?,?,?)",
      //   [title, release_date, artist, genre, picture]
      // )
      .then(([results]) => results)
  );
};

const edit = (id, body) => {
  return database
    .query("UPDATE album SET ? WHERE id=?", [body, id])
    .then(([results]) => results);
};

const deleteAlbumById = (id) => {
  return database
    .query("DELETE FROM album WHERE id=?", id)
    .then(([results]) => results);
};

module.exports = {
  getAll,
  getById,
  createNewAlbum,
  edit,
  deleteAlbumById,
};
