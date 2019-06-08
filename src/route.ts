import * as express from 'express'
export const routeRouter = express.Router()

import { RouteModel } from './model/routeModel'

routeRouter.post('/', (req,res) => {
  const Route = new RouteModel()

  Route.user = req.query.user
  Route.longitude = req.query.longitude
  Route.latitude = req.query.latitude
  Route.date = new Date()

  Route.save((err: string) => {
    if (err) {
      console.error(err)
      res.send(err)
    } else {
      res.json({
        message: 'success'
      })
    }
  })
})

routeRouter.get('/', (_req, res) => {
  RouteModel.find()
    .then((routes: string[]) => {
      res.json(routes)
    })
})

routeRouter.get('/last', (_req, res) => {
  RouteModel.find().limit(1).sort({ $natural: -1 })
    .then((routes: string[]) => {
      res.json(routes)
    })
})

routeRouter.get('/user/:user', (req, res) => {
  RouteModel.find({ 'user': req.params.user })
    .then((routes: string[]) => {
      res.json(routes)
    })
})
