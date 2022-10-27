const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const category = require('./data/category.json');
const premium = require('./data/premium.json');

app.get('/', (req, res) => {
    res.send('srever is running')
});

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c => c.id === id);
    res.send(selectedCourse);
})

app.get('/category', (req, res) => {
    res.send(category);
});

app.get('/premium/:id', (req, res) => {
    const id = req.params.id;
    const selected = premium.find(c => c.id === id);
    res.send(selected);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })