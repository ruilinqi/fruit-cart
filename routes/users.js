/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  db.query("SELECT name, email, phone FROM users;")
  .then(data => {
    const templateVars = { users: data.rows }
    console.log(templateVars);
    res.render("index", templateVars);
  })
  .catch(err => {
    console.log("this is an error", err);
  });
});

module.exports = router;
