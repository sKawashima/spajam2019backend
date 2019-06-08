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

app.get('/', (req, res) => res.send('Hello Express'))

import {favoriteRouter} from './favorite'
app.use('/favorite', favoriteRouter)

app.listen(port, () => console.log(`Server Up.`))
