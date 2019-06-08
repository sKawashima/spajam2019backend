import * as mongoose from 'mongoose'

const FavoriteSchema = new mongoose.Schema({
  user: String,
  longitude: Number,
  latitude: Number,
  date: Date
})

export const FavoriteModel:any = mongoose.model('FavoriteModel', FavoriteSchema)
