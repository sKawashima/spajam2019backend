import * as mongoose from 'mongoose'

const RouteSchema = new mongoose.Schema({
  user: String,
  longitude: Number,
  latitude: Number,
  date: Date
})

export const RouteModel:any = mongoose.model('Route', RouteSchema)
