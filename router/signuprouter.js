const express = require('express')
const { signup, signuppush } = require('../controller/signup')
const router = express.Router()

router
    .route('/')
    .get(signup)
    .post(signuppush)

module.exports = router