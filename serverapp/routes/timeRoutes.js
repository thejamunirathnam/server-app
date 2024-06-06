const express = require('express');
const router = express.Router();
const { getTime } = require('../utils/timeUtils');

router.get('/time', getTime);

module.exports = router;
