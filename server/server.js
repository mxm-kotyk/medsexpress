const path = require("path");
const configPath = path.join(__dirname, "..", "config", ".env");
const express = require("express");

require("dotenv").config({ path: configPath });
require("colors");
const connectDb = require("../config/connectDb");

const app = express();

app.get("/", (req, res) => {
  res.send("Connected");
});

const { PORT } = process.env;

connectDb();

app.listen(PORT, () => {
  console.log(`Server is listening the port: ${PORT}`);
});
