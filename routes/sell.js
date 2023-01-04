const express = require('express');
const db = require('../db/connection');
const router  = express.Router();

router.get("/sell", (req, res) => {
  res.render("sell");

});

router.post("/sell", (req, res) => {
  // const id = req.body.id;
  const name = req.body.name;
  const description = req.body.description;
  const imageURL = req.body.imageURL; // Changed fruit_picture_url to imageURL.
  const price = req.body.price;
  const ownerID = 3;
  // const ownerID = req.session.owner_id;
  const isSold = false;
  // const listTime = req.body.list_time;


  // ** Removed id, date, as these values will be supplied by default.
  const sql = `INSERT INTO fruits (name, description, fruit_picture_url, price, owner_id, isSold) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`;
  // const sql = `INSERT INTO fruits (name, description, fruit_picture_url, price, owner_name, isSold) VALUES ($2, $3, $4, $5, $6, $7, $8) RETURNING *;`;

  db.query(sql, [name, description, imageURL, price, ownerID, isSold])
    .then(data => {
      console.log(data.rows);
      res.redirect("/")
    })
    .catch(err => {
      res
          .status(500)
          .json({ error: err.message });
    });
})

module.exports = router;
