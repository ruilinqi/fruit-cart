const db = require('../connection');

const getFavourites = (user_id) => {
  return db.query(`SELECT fruits.id, fruits.name as fruit_name, fruits.price, users.id, users.name as user_name, users.email FROM favourites
  JOIN users ON users.id = favourites.user_id
  JOIN fruits ON fruits.id = favourites.fruit_id
  WHERE users.id = $1`, [user_id])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getFavourites };
