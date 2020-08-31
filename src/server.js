import express from 'express'
import dotenv from 'dotenv'

// Access Env. variables
dotenv.config()

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Universe!')
})

app.listen(port, () => console.log(`listening at 3000`))