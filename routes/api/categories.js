const express = require("express");

const controller = require("../../controller/categories");

const route = express.Router();

route.get("/", controller.getAll);

route.get("/:id", controller.getById);

module.exports = route;
