const express = require('express');
const router  = express.Router();
const shoppingItemsQueries = require('../db/queries/shopping_list');
const db = require('../db/connection');

router.get("/", (req, res) => {
  // db.query('SELECT * FROM fruits;')
  const userID = req.session.user_id;
  shoppingItemsQueries.getShoppingItems(userID)
  .then(data => {
    console.log("userID:", userID);
    const templateVars = { fruits: data }
    console.log("templateVars: ", templateVars);
    res.render("shopping_list", templateVars);
  })
  .catch(err => {
    res
        .status(500)
        .json({ error: err.message });
  });
});

// Delete fruits from favourites
router.post("/:fruit_id/delete", (req, res) => {
  const fruitId = req.params.fruit_id;
  const userID = req.session.user_id;
  const sql = `DELETE FROM shopping_list WHERE user_id = $1 AND fruit_id = $2 RETURNING *;`
  db.query(sql, [userID, fruitId])
  .then(data => {
    res.redirect("/")
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});


module.exports = router;
