const express = require('express');
const { getNearbyUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/nearby-users', getNearbyUsers);

module.exports = router;
