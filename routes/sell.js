const express = require('express');
const db = require('../db/connection');
const router  = express.Router();

router.get("/sell", (req, res) => {
    let usersQuery = `SELECT isadmin FROM users WHERE id = ${req.session.user_id};`;
    db.query(usersQuery)
    .then(data => {
      isadmin = data.rows[0].isadmin;
      if (isadmin) {
        res.render("sell");
      } else {
        res
          .status(500)
          .json({ error: "Must be an admin to use this page." });
      }
    })
    .catch(err => {
      res
          .status(500)
          .json({ error: err.message });
    });
});

router.post("/sell", (req, res) => {
  // const id = req.body.id;
  const name = req.body.name;
  const description = req.body.description;
  const imageURL = req.body.imageURL; // Changed fruit_picture_url to imageURL.
  const price = req.body.price;
  const ownerID = req.session.user_id;
  console.log("ownerID", ownerID);
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
});

router.post("/sold", (req, res) => {
  console.log(req.body);

  fruit_id = req.body.id;

  let fruitUpdate = `UPDATE fruits SET issold = true WHERE id = ${fruit_id} RETURNING *;`;
  db.query(fruitUpdate)
  .then(data => {
    updated = data.rows[0].issold;
    console.log(updated);
    if (!updated) {
      res
        .status(500)
        .json({ error: "The item could not be marked as sold." });
    }
  })
  .catch(err => {
    res
        .status(500)
        .json({ error: err.message });
  });

});

module.exports = router;
