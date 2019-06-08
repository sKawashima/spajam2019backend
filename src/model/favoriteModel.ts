import * as mongoose from 'mongoose'

const FavoriteSchema = new mongoose.Schema({
  user: String,
  longitude: String,
  latitude: String,
  date: Date
})

export const FavoriteModel = mongoose.model('FavoriteModel', FavoriteSchema)
