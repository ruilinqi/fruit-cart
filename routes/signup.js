const express = require('express');
const db = require('../db/connection');
const router  = express.Router();



router.get("/signup", (req, res) => {

  res.render("signup");

});

router.post("/signup", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const phone = req.body.phone;
  const pictureURL = "";
  const isAdmin = false;


  const sql = `INSERT INTO users (id, name, password, email, phone, picture_url, isAdmin) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`;
  // const sql = `INSERT INTO fruits (name, description, fruit_picture_url, price, owner_id, isSold, list_time) VALUES ($2, $3, $4, $5, $6, $7, $8) RETURNING *;`;

  db.query(sql, [id, name, password, email, phone, pictureURL, isAdmin])
    .then(data => {
      console.log("User Data:", data);
      res.redirect("/");
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
