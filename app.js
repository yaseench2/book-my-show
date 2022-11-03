require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL)
    .then(() => (console.log('db connected')))
    .catch((e) => (console.log(e)))
let port = process.env.PORT || 3000

const cookieParser = require('cookie-parser')
app.use(express.json())
app.use(express.static('static'))
app.use(cookieParser())
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));
app.use(express.json())

const signuprouter = require('./router/signuprouter')
const loginrouter = require('./router/loginrouter')
const homerouter = require('./router/homerouter')
const admin = require('./router/adminrouter')

app.use('/admin', admin)
app.use('/userhome', homerouter)
app.use('/login', loginrouter)
app.use('/signup', signuprouter)



app.listen(port, () => {
    console.log("running in " + port)
})