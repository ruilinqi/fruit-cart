const express = require('express');
const db = require('../db/connection');
const router  = express.Router();
const bcrypt = require("bcryptjs");


router.get('/login', (req, res) => {

  const userID = req.session["user_id"];
  const templateVars = {
    user: userID,
    session: req.session
  };

  if (userID) {
    return res.redirect("/");
  }

  res.render("login", templateVars);

});


router.post("/login", (req, res) => {
  const loginEmail = req.body.email;
  const loginPassword = req.body.password;

  db.query("SELECT email, password FROM users WHERE email=$1", [loginEmail])
    .then(data => {
      const templateVars = { users: data.rows };

      const user = data.rows[0];
      console.log(user);

      if (!user) {
        return res.send("<html><body><h3>Error 403: Email not found</h3></body></html>");
      }

      if (!bcrypt.compareSync(loginPassword, user.password)) {
        return res.status(403)
          .send('Incorrect password\n<button onclick="history.back()">Back</button>');

      }
      req.session["user_id"] = user.id;
      res.redirect("/");

    })
    .catch(err => {
      console.log("this is an error", err);
    });

  router.post("/logout", (req, res) => {
    res.clearCookie('username');
    res.redirect("/");
  });

});

module.exports = router;

