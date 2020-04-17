const express = require('express')

const UserCtrl = require('./controller/UserController')
const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.get('/users', UserCtrl.getUser)

module.exports = router;