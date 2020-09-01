const express = require('express');
const router = express.Router();

const UserController = require('./controller/UserController');

router.post('/insertUser', UserController.insertUserData);
router.get('/getUser', UserController.getAllUserData);





module.exports = router;