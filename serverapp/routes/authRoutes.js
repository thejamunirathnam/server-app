const express = require('express');
const router = express.Router();
const { login } = require('../utils/authUtils');
const { generateOneTimeLink } = require('../utils/authUtils');

router.post('/login', login);
router.post('/generate-link', generateOneTimeLink);


module.exports = router;
