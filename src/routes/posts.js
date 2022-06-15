const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("The GET /posts endpoint!");
});

module.exports = router;
