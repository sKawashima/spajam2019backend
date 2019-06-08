import * as express from 'express'
export const favoriteRouter = express.Router()

import { FavoriteModel } from './model/favoriteModel'

favoriteRouter.post('/', (req,res) => {
  const Favorite = new FavoriteModel()

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

favoriteRouter.get('/', (_req, res) => {
  FavoriteModel.find()
    .then((favorites: string[]) => {
      res.json(favorites)
    })
})

favoriteRouter.get('/last', (_req, res) => {
  FavoriteModel.find().limit(1).sort({ $natural: -1 })
    .then((favorites: string[]) => {
      res.json(favorites)
    })
})

// ユーザーごとのデータ取得
favoriteRouter.get('/user/:user', (req, res) => {
  FavoriteModel.find({ 'user': req.params.user })
    .then((favorites: string[]) => {
      res.json(favorites)
    })
})
