const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/usersCtrl')

router.post('/register', userCtrl.register)

module.exports = router;