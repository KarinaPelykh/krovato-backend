const express = require("express");

const { validateBody } = require("../../decorator");

const { reviewSchema } = require("../../schemas");

const controller = require("../../controller/reviews");

const addSchema = validateBody(reviewSchema);

const route = express.Router();

route.get("/", controller.getAllReviews);

route.post("/add", addSchema, controller.addReview);

module.exports = route;
