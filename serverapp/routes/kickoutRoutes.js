const express = require('express');
const router = express.Router();
const { kickoutUser } = require('../utils/authUtils');

router.post('/kickout', kickoutUser);

module.exports = router;
