const db = require('../connection');

const getFruitById = (fruit_id, db) => {
  const queryString = `SELECT * FROM fruits
  WHERE id = $1;`;
  return db
    .query(queryString, [fruit_id])
    .then((res) => res.rows[0])
    .catch((err) => console.log(err.message));
};

module.exports = { getFruitById };
