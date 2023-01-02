const db = require('../connection');

const getFavourites = () => {
  return db.query(`SELECT * FROM favourites
  JOIN fruits ON fruits.id = favourites.fruit_id
  JOIN users ON users.id = favourites.user_id
  WHERE users.id = 1;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getFavourites };
