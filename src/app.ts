import * as mongoose from 'mongoose'

// mongoose.Promise = global.Promise
mongoose.connect('mongodb+srv://mongo:2vpFSevtWpbPqF5F@cluster0-vbb6l.gcp.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })
mongoose.connection.on('error', (err: string) => {
  console.error('MongoDB connection error: ' + err)
  process.exit(-1);
})

import * as express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello Express'))

app.listen(port, () => console.log(`Server Up.`))
