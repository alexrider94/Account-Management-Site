const express = require('express')
const UserCtrl = require('./controller/UserController')

const router = express.Router()

router.post('/insertUser', UserCtrl.insertUser)
router.get('/getUser', UserCtrl.getUser)

module.exports = router;