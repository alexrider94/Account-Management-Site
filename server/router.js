const express = require('express')

const UserCtrl = require('./controller/UserController')
const router = express.Router()

router.post('/user', UserCtrl.insertUser)
router.get('/users', UserCtrl.getUser)
router.post('/selectedUser', UserCtrl.getSelectedUser)

module.exports = router;