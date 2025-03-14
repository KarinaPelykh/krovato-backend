const express = require('express')

require("dotenv").config()

const moment = require('moment')

const fs = require('fs/promises')

const cors = require('cors')

const app = express()

const categories = require('./routes/api/categories')

const reviews = require('./routes/api/reviews')

const products = require('./routes/api/products')

const blogs = require('./routes/api/blogs')

const  {swaggerDocs}  = require('./middlewares/swaggerDocs')

app.use(cors())

app.use(express.json())

app.use('/api/categories', categories)

app.use('/api/reviews', reviews)

app.use('/api/products', products)

app.use('/api/blogs', blogs)

app.use('/api-docs', swaggerDocs())

app.use(async (req, res, next) => {
  const { method, url } = req
  const date = moment().format('DD-MM-YYYY_hh:mm:ss')
  await fs.appendFile('./public/server.log', `\n${method}${url}${date}`)
  next()
})

app.use((req, res, next) => {
  console.log('middleware')
  next()
})

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' })
})

module.exports = app

// password AAUW92N8K7fN.9q
// name Karyna
