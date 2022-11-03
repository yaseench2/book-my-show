const express = require('express')
const { adminviewtheater, adminviewmovie, uploadmovie, adminupdatetheater } = require('../controller/admin')
const { isadmin1 } = require('../middleware/islogged')
const router = express.Router()

router
    .route('/')
    .get(adminviewmovie)
    .post(uploadmovie)

router
    .route('/adminviewtheater')
    .get(adminviewtheater)
    .post(adminupdatetheater)


module.exports = router