const express = require('express');

const app = express();

app.get('/userinfo', function (req, res) {
    res.send({
        name: '张',
        age: 18
    });
})


const port = 5000;
app.listen(port, function (err) {
    if (err) {
        return console.log(err)
    }

    console.log('监听 ' + port)
});
