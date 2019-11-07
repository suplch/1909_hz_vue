const express = require('express');

const app = express();

app.get('/user/userinfo', function (req, res) {

    setTimeout(function () {
        res.send({
            name: 'zhang',
            age: 18
        })
    }, 3000)
});

app.get('/user/usersalary', function (req, res) {

    setTimeout(function () {
        res.send({
            salary: 10000
        })
    }, 1000)
});

app.get('/user/userscore', function (req, res) {

    setTimeout(function () {
        res.send({
            score: 99
        })
    }, 1000)
});

const port = 7000;
app.listen(port, function (err) {
    if (err) {
        return console.log(err)
    }

    console.log('监听 ' + port)
});
