const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const categories = require('./data/categories.json');
const sub_titels = require('./data/sub_title.json');
const teachers = require('./data/teachers.json');


app.get('/', (req, res) => {
    res.send("learning hub bd");
});

app.get('/categories', (req, res) => {
    res.send(categories);
});

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const category_sub_titles = sub_titels.filter(sub => sub.category_id === id);
    res.send(category_sub_titles);
});

app.get('/teacher', (req, res) => {
    res.send(teachers);
});




app.listen(port, () => {
    console.log("learning hub server running");
});