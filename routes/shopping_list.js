const express = require('express');
const router  = express.Router();
const shoppingItemsQueries = require('../db/queries/shopping_list');

router.get("/", (req, res) => {
  shoppingItemsQueries.getShoppingItems()
  .then(data => {
    console.log("data:", data);
    const templateVars = { fruits: data }
    console.log(templateVars);
    res.render("shopping_list", templateVars); //data renders on the ejs file: shopping.list
  })
  .catch(err => {
    res
        .status(500)
        .json({ error: err.message });
  });
});

module.exports = router;
