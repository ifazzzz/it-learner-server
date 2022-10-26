const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const users = require('./data/user.json');

app.get('/', (req, res) => {
    res.send('srever is running')
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })