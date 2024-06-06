const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const timeRoutes = require('./routes/timeRoutes');
const kickoutRoutes = require('./routes/kickoutRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/time', timeRoutes);
app.use('/api/kickout', kickoutRoutes);

// app.use('/', ()=>{
//     console.log("Hello Theja");
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
