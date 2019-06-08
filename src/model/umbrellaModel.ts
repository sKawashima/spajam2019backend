import * as mongoose from 'mongoose'

const UmbrellaSchema = new mongoose.Schema({
  umbrella: String,
  user: String,
  date: Date
})

export const UmbrellaModel:any = mongoose.model('Umbrella', UmbrellaSchema)
