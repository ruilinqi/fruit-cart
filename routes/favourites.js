const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const favouritesQueries = require('../db/queries/favourites');

router.get("/", (req, res) => {
  // db.query('SELECT * FROM fruits;')
  favouritesQueries.getFavourites()
  .then(data => {
    console.log("data:", data);
    const templateVars = { fruits: data }
    console.log(templateVars);
    res.render("favourites", templateVars);
  })
  .catch(err => {
    res
        .status(500)
        .json({ error: err.message });
  });
});

module.exports = router;
