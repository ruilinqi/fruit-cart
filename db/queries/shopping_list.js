const db = require('../connection');

const getShoppingItems = () => {
  return db.query(`SELECT fruits.id, fruits.name as fruit_name, fruits.price, users.id, users.name as user_name FROM shopping_list
  JOIN fruits ON fruits.id = shopping_list.fruit_id
  JOIN users ON users.id = shopping_list.user_id
  WHERE users.id = 1;`)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getShoppingItems };
