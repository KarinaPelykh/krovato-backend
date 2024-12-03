const express = require("express");
const moment = require("moment");
const fs = require("fs/promises");
const app = express();

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

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/blog", (req, res) => {
//   res.send("<h2>Blog</h2>");
// });

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(3001, () => console.log("Server running"));
