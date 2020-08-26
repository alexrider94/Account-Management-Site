const express = require('express');
const router = express.Router();

const UserCtrl = require('./controller/UserController');

router.post('/insertUser', UserCtrl.insertUser);

router.get('/getUser', UserCtrl.getUser);

module.exports = router;