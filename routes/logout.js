const express = require('express');
const db = require('../db/connection');
const router  = express.Router();
const cookieSession = require("cookie-session");

router.post("/logout", (req, res) => {
  console.log("INSIDE LOGOUT POST. +++++++++++++++++++++++++++++++++++++++");
  res.clearCookie("session");
  res.clearCookie("session.sig");
  res.redirect("/");
});

module.exports = router;
