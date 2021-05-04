const express = require("express");
const apiRoutes = require("./routes");

const app = express();
app.use(express.json());

//routes
app.use("/api", apiRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
