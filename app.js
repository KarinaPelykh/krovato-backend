const express = require("express");

const moment = require("moment");

const fs = require("fs/promises");

const cors = require("cors");

const app = express();

const categories = require("./routes/api/categories");

app.use(cors());

app.use("/api/categories", categories);

app.use(async (req, res, next) => {
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("./public/server.log", `\n${method}${url}${date}`);
  next();
});

app.use((req, res, next) => {
  console.log("middleware");
  next();
});

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

module.exports = app;

// password AAUW92N8K7fN.9q
// name Karyna
