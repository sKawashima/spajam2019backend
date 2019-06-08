import * as express from 'express'
export const favoriteRouter = express.Router()

import {FavoriteModel} from './model/favoriteModel'

favoriteRouter.get('/', (_req, res) => {
  res.send('This is favorite API.')
})
