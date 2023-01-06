const express = require('express');
const db = require('../db/connection');
const router  = express.Router();

router.post("/route-remove-product", (req, res) => {
  console.log("INSIDE REMOVE ROUTE: ",req.body);

  fruit_id = req.body.id;

  let fruitUpdate = `DELETE FROM fruits WHERE id = ${fruit_id} RETURNING *;`;
  db.query(fruitUpdate)
  .then(data => {
    console.log("RETURN FROM DB: ",data.rows)
    // updated = data.rows[0].issold;
    // console.log(updated);
    // if (!updated) {
    //   res
    //     .status(500)
    //     .json({ error: "The item could not be marked as sold." });
    // }
  })
  .catch(err => {
    res
        .status(500)
        .json({ error: err.message });
  });

});

module.exports = router;
