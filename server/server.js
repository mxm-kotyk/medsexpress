const path = require("path");
const configPath = path.join(__dirname, "..", "config", ".env");
const express = require("express");

require("dotenv").config({ path: configPath });
require("colors");
const connectDb = require("../config/connectDb");
const { drugsRoutes, storesRoutes, ordersRoutes } = require("./routes");
const { notFoundUrl, errorHandler } = require("./middlewares");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/drugs", drugsRoutes);
app.use("/api/stores", storesRoutes);
app.use("/api/orders", ordersRoutes);

const { PORT } = process.env;

app.use(notFoundUrl);
app.use(errorHandler);

connectDb();

app.listen(PORT, () => {
  console.log(`Server is listening the port: ${PORT}`);
});
