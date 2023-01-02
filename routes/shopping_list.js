const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const shoppingItemsQueries = require('../db/queries/shopping_list');

router.get("/", (req, res) => {
  // db.query('SELECT * FROM fruits;')
  shoppingItemsQueries.getShoppingItems()
  .then(data => {
    console.log("data:", data);
    const templateVars = { fruits: data }
    console.log(templateVars);
    res.render("shopping_list", templateVars); //render on the ejs
  })
  .catch(err => {
    res
        .status(500)
        .json({ error: err.message });
  });
});

module.exports = router;
