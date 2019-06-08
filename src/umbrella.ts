import * as express from 'express'
export const umbrellaRouter = express.Router()

import { UmbrellaModel } from './model/umbrellaModel'

umbrellaRouter.post('/', (req,res) => {
  const Umbrella = new UmbrellaModel()

  Umbrella.umbrella = req.query.umbrella
  Umbrella.user = req.query.user
  Umbrella.date = new Date()

  Umbrella.save((err: string) => {
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

umbrellaRouter.get('/', (_req, res) => {
  UmbrellaModel.find()
    .then((umbrellas: string[]) => {
      res.json(umbrellas)
    })
})

umbrellaRouter.get('/user/:user', (req, res) => {
  UmbrellaModel.find({ 'user': req.params.user })
    .then((umbrellas: string[]) => {
      res.json(umbrellas)
    })
})

umbrellaRouter.get('/umbrella/:umbrella', (req, res) => {
  UmbrellaModel.find({ 'umbrella': req.params.umbrella })
    .then((umbrellas: string[]) => {
      res.json(umbrellas)
    })
})
