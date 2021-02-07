const express = require("express");
var app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var session = require('express-session');

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'mrlzarate',
    port: 5432
});

app.get('/', (request, response) => {

    if (request) {
        response.json('Welcome back, ' + request.username + '!');
    } else {
        console.log("ok so, the redirect works BUT")
        response.send('Please login to view this page!');
    }
    response.end();
});

app.post("/auth", (req, res) => {
    console.log(req)
    var innit = req.body.Title

    console.log(innit)
    res.send(innit)
})

app.post("/sign", (req, res) => {
    console.log(req)
    var name = req.body.name
    var email = req.body.email
    var password = req.body.password

    if (name && password && email) {
        pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, password])
        res.status(201).send(req.session);
    } else {
        res.status(400).send('Review your requests body.');
    }

})

var port = 5000;
app.listen(port, () => console.log(`SERVER LISTENING IN PORT : ${port}`));