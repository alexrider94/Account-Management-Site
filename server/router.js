const express = require('express')

const UserCtrl = require('./controller/UserController')
const router = express.Router()

router.post('/user', UserCtrl.createUser)

module.exports = router;