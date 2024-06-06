const jwt = require('jsonwebtoken');
const users = require('../database/users.json');
const crypto = require('crypto');
let activeTokens = {}; 


const getUserByUsername = (username) => {
  return users.find(user => user.username === username);
};

const login = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  const user = getUserByUsername(username);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username }, 'Thejasree', { expiresIn: '1h' });
  res.json({ token });
};

const generateOneTimeLink = (req, res) => {
  const { email } = req.body;
  const token = crypto.randomBytes(32).toString('hex'); 
  const link = `https://thejasree.com/${token}`; 
  res.json({ link });
};


const kickoutUser = (req, res) => {
  const { username } = req.body;
  delete activeTokens[username]; 
  res.json({ message: `${username} has been kicked out` });
};


module.exports = { login, kickoutUser, generateOneTimeLink };
