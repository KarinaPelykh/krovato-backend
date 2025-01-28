const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.json([
    { title: "Bed in the bedroom", amount: 30 },
    { title: "Bed in the bedroom", amount: 30 },
  ]);
});

module.exports = route;
