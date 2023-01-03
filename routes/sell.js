const express = require('express');
const db = require('../db/connection');
const router  = express.Router();

router.get("/sell", (req, res) => {
  res.render("sell");

});

router.post("/sell", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const description = req.body.description;
  const imageURL = req.body.fruit_picture_url;
  const price = req.body.price;
  const ownerId = req.body.owner_id;
  const isSold = false;
  const listTime = req.body.list_time;

  const sql = `INSERT INTO fruits (id, name, description, fruit_picture_url, price, owner_id, isSold, list_time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`;
  // const sql = `INSERT INTO fruits (name, description, fruit_picture_url, price, owner_id, isSold, list_time) VALUES ($2, $3, $4, $5, $6, $7, $8) RETURNING *;`;

  db.query(sql, [id, name, description, imageURL, price, ownerId, isSold, listTime])
    .then(data => {
      res.redirect("/")
    })
    .catch(err => {
      res
          .status(500)
          .json({ error: err.message });
    });
})

module.exports = router;
