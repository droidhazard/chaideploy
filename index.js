const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT

const githubData = {
  "message": "I don't have enough github data"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('hello')
})

app.get('/login', (req, res)=> {
  res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>Chai aur Code</h2>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
