const express = require('express');
const { Cat } = require('./models');

const app = express();

app.use(express.json()); // app-wide middleware

app.post('/cats', (req, res) => {
    Cat.create(req.body).then(cat => res.status(201).json(cat));
});

app.get('/cats', (req, res) => {
    Cat.findAll({ where: req.query }).then(cats => res.status(200).json(cats));

    // if (!req.query.length) {
    //     Cat.findAll().then(cats => res.status(200).json(cats));
    // } else {
    //     Cat.findAll({ where: req.query }).then(cats => res.status(200).json(cats));
    // }
    // NB. Sequelize takes care of this for us. If no query strings are passed
    // in the URI then sequelize will return all cats
});

app.get('/cats/:catId', (req, res) => {
    Cat.findByPk(req.params.catId).then(cat => res.status(200).json(cat));
});

app.patch('/cats/:catId', (req, res) => {
    Cat.update(req.body, { where: { id: req.params.catId } })
        .then(rows => res.status(200).json(rows));
});

app.delete('/cats/:catId', (req, res) => {
    Cat.destroy({ where: { id: req.params.catId } })
        .then(rows => res.status(200).json(rows));
});

module.exports = app;