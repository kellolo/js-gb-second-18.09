const express = require('express')
const db = require('./db')
const router = require('./router')

const app = express()

app.use (express.json ())
app.use (express.static ('public'))

app.use (router)

app.listen( 3000, () => console.log ('App started on port 3000') )
