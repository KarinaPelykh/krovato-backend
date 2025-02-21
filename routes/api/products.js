const express = require("express");

const route = express.Router();

const controller = require("../../controller/products");

route.get("/", controller.getAllProduct);

module.exports = route;
