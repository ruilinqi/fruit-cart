const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get("/contact", (req, res) => {
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
  res.render("contact", templateVars);
});


module.exports = router;
