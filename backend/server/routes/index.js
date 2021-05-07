const express = require("express");
const db = require("../db");
const router = express.Router();

//Get all produce items
router.get("/", async (req, res, next) => {
  try {
    let results = await db.all();
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//Filter table by search query
router.get("/search/:product", async (req, res, next) => {
  try {
    let results = await db.filter(req.params.product);
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

module.exports = router;
