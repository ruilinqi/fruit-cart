/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const userQueries = require('../db/queries/users');

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// add item to favourite
router.post("/:fruit_id/favourite", (req, res) => {
  console.log(req.body);
  const fruitId = req.params.fruit_id;
  const userID = req.session.user_id;
  console.log("fruitId: ", fruitId)
  console.log("userID: ", userID)
  const sql = `INSERT INTO favourites (user_id, fruit_id) VALUES ($1, $2) RETURNING *;`
  db.query(sql, [userID, fruitId])
  .then(data => {
    res.redirect("/")
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

module.exports = router;
