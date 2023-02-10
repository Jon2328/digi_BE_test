import express from 'express';
import * as dotenv from 'dotenv'
import knexConfig from './db/config'
import path from 'path'

dotenv.config()

const app = express()
const port = 3000

app.use((req, _res, next) => {
  req.db = knexConfig()
  next()
})

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello')
})

app.use('/doc', (req, res) => {
  res.sendFile(path.join(__dirname, '/html/doc.html'));
})

app.use('/user', require('./routes/user'))

app.listen(port, () => {
  console.log('server started at ' + port)
})