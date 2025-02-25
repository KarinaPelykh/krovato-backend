// const createHttpError = require('http-errors')
import swaggerUI from 'swagger-ui-express'
import fs from 'node:fs'
import path from 'node:path'

export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json')

export const swaggerDocs = () => {
  try {
    const swaggerDoc = JSON.parse(fs.readFileSync(SWAGGER_PATH).toString())
    return [...swaggerUI.serve, swaggerUI.setup(swaggerDoc)]
  } catch (err) {
    return (req, res, next) => next()
  }
}
