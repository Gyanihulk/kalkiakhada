import type { Express } from 'express'
import type { Context } from '.keystone/types'
import bodyParser from 'body-parser'

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {}
import { body } from 'express-validator'
export const extendExpressApp = async (app: Express, createContext: Object) => {
  app.use('/', async (req, res, next) => {
    // Add context to the req
    req.context = await createContext(req, res)
    next()
  })
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())

  //parse the errorhandler
  app.use(errorHandler)


}
