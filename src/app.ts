import * as dotenv from 'dotenv'
dotenv.config()

import * as mongoose from 'mongoose'
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.on('error', (err: string) => {
  console.error('MongoDB connection error: ' + err)
  process.exit(-1);
})

import * as express from 'express'
const app = express()
const port = 3000
app.set('view engine', 'pug')

app.get('/', (req, res) => res.send('Hello Express'))

import { favoriteRouter } from './favorite'
app.use('/favorite', favoriteRouter)

import { routeRouter } from './route'
app.use('/route', routeRouter)

import { umbrellaRouter } from './umbrella'
app.use('/umbrella', umbrellaRouter)

import { testRouter } from './test'
app.use('/test', testRouter)

app.listen(port, () => console.log(`Server Up.`))
