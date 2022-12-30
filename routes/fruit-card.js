// Single fruit card
// It shows the fruit card after click on each fruit. It haven't implemented well.

const express = require('express');
const router  = express.Router();
const fruitsQueries = require('../db/queries/fruit-card');


router.get("/:fruit_id", (req, res) => {
  const userID = req.cookies.user_id;
  const fruit_id = req.params.fruit_id;
  fruitsQueries.getFruitById(fruit_id, db)
  .then((fruit) => {
    const templateVars = { userID, fruit };
    if (!fruit) {
      res.redirect("/");
    }
    res.render("fruits", templateVars);
  });
});

module.exports = router;

