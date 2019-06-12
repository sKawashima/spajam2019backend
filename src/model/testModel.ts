import * as mongoose from 'mongoose'

const TestSchema = new mongoose.Schema({
  key: String,
  date: Date
})

export const TestModel: any = mongoose.model('Test', TestSchema)
