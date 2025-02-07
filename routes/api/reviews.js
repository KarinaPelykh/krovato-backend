const express = require("express");

const controller = require("../../controller/reviews");

const route = express.Router();

route.get("/", controller.getAllReviews);

route.post("/add", controller.addReview);

module.exports = route;
