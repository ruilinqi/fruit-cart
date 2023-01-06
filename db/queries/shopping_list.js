const db = require('../connection');

const getShoppingItems = (user_id) => {
  return db.query(`SELECT fruits.id as fruit_id, fruits.name as fruit_name,
  fruits.price, fruits.fruit_picture_url,
  users.id, users.name as user_name, users.email, shopping_list.id as shop_id
  FROM shopping_list
  JOIN users ON users.id = shopping_list.user_id
  JOIN fruits ON fruits.id = shopping_list.fruit_id
  WHERE users.id = $1`, [user_id])
    .then(data => {
      return data.rows;
    });
};
module.exports = { getShoppingItems };
