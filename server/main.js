const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res)=> {
  return res.send(`
    <html><body><h1>Hello ExpressJS - ${process.env.NAME}</h1></body></html>
  `)
})

const port = process.env.PORT || 3333

app.listen(port)