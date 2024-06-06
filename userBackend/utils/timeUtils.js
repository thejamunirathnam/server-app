const jwt = require('jsonwebtoken');

const getTime = (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'Thejasree');
    res.json({ time: new Date().toISOString() });
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = { getTime };
