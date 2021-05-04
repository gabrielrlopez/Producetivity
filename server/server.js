const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", async (req, res) => {
  try {
    let results = await db.all();
    res.json(results);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
