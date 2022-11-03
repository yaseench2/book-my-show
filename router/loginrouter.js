const express = require('express')
const { login, loginpost } = require('../controller/login')
const router = express.Router()

router
    .route('/')
    .get(login)
    .post(loginpost)


module.exports = router