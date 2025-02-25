const express = require('express')

const route = express.Router()

const controller = require('../../controller/blogs')

route.get('/', controller.getAllBlogs)

module.exports = route
