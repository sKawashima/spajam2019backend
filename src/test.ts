import * as express from 'express'
export const testRouter = express.Router()

import { TestModel } from './model/testModel'

testRouter.post('/', (req,res) => {
  const Test = new TestModel()

  Test.user = req.query.user
  Test.longitude = req.query.longitude
  Test.latitude = req.query.latitude
  Test.date = new Date()

  Test.save((err: string) => {
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

testRouter.get('/', (_req, res) => {
  TestModel.find()
    .then((testData: string[]) => {
      res.json(testData)
    })
})

testRouter.get('/last', (_req, res) => {
  TestModel.find().limit(1).sort({ $natural: -1 })
    .then((testData: string[]) => {
      res.json(testData)
    })
})

// ユーザーごとのデータ取得
testRouter.get('/user/:user', (req, res) => {
  TestModel.find({ 'user': req.params.user })
    .then((testData: string[]) => {
      res.json(testData)
    })
})
