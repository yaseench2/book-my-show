const express = require('express')
const { get } = require('mongoose')
const { logout } = require('../controller/login')
const { userhome, userprofile, updateprofile, movietheater, booktickets, confrimseats, userconfirmedseats } = require('../controller/user')
const { ifLoggedin, isadmin1 } = require('../middleware/islogged')
const { route } = require('./signuprouter')
const router = express.Router()

router
    .route('/')
    .get(userhome)
router
    .route('/logout')
    .get(logout)
router
    .route('/userprofile')
    .get(userprofile)
    .post(updateprofile)

router
    .route('/userviewtheater:mname')
    .get(movietheater)

router
    .route('/userbookseats:mname/:thname/:thtime/:thseats')
    .get(booktickets)
    .post(confrimseats)

// router
//     .route('/userconfirmedseats:mname/:thname/:thtime/:thseats')
//     .get(userconfirmedseats)

module.exports = router