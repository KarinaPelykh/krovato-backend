
const swaggerUI = require('swagger-ui-express');
const fs = require('node:fs');
const path = require('node:path');

 const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json')

 const swaggerDocs = () => {
  try {
    const swaggerDoc = JSON.parse(fs.readFileSync(SWAGGER_PATH).toString())
    return [...swaggerUI.serve, swaggerUI.setup(swaggerDoc)]
  } catch (err) {
    return (req, res, next) => next()
  }
}

module.exports ={swaggerDocs}