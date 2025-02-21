const express = require("express");

const controller = require("../../controller/categories");

const { validateBody } = require("../../decorator");

const { categorySchema } = require("../../schemas");

const addCategorySchema = validateBody(categorySchema);

const route = express.Router();

route.get("/", addCategorySchema, controller.getAll);

route.get("/:id", addCategorySchema, controller.getById);

module.exports = route;
