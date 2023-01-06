const express = require('express');
const db = require('../db/connection');
const router  = express.Router();
const bcrypt = require("bcryptjs");


router.get("/signup", (req, res) => {
  const userID = req.session["user_id"];

  let templateVars = { user: [{}] };
  let usersQuery = `SELECT id, email FROM users WHERE id = ${userID};`;
    db.query(usersQuery)
    .then(data => {
      templateVars.user = data.rows;
    })
    .catch(err => {
      console.log(err);
    });
  console.log("TEMPLATE VARS: ",templateVars);
  res.render("signup", templateVars);

});

router.post("/signup", (req, res) => {

  const name = req.body.name;
  const inputPassword = req.body.password;
  const password = bcrypt.hashSync(inputPassword, 10);
  const email = req.body.email;
  const phone = req.body.phone;
  const pictureURL = "";
  const isAdmin = false;


  const sql = `INSERT INTO users (name, password, email, phone, picture_url, isAdmin) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`;
  // const sql = `INSERT INTO fruits (name, description, fruit_picture_url, price, owner_id, isSold, list_time) VALUES ($2, $3, $4, $5, $6, $7, $8) RETURNING *;`;

  db.query(sql, [name, password, email, phone, pictureURL, isAdmin])
    .then(data => {
      console.log("User Data:", data);
      res.redirect("/login");
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
