import * as express from 'express'
export const favoriteRouter = express.Router()

favoriteRouter.get('/', (_req, res) => {
  res.send('This is favorite API.')
})

import { FavoriteModel } from './model/favoriteModel'
favoriteRouter.post('/', (req,res) => {
  const Favorite:any = new FavoriteModel()

  Favorite.user = req.query.user
  Favorite.longitude = req.query.longitude
  Favorite.latitude = req.query.latitude
  Favorite.date = new Date()

  Favorite.save((err: string) => {
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
