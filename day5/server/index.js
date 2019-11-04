const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const url = path.join(__dirname, '..', 'router-client', 'dist');
console.log(url);


//app.use(express.static(url));

// app.get('/about', function (req, res) {
//
//
//     fs.readFile(url + '/index.html', function (err, content) {
//
//         console.log(content);
//
//         res.writeHead(200, {
//             'Content-Type': 'text/html; chartset=utf-8'
//         });
//         res.end(content);
//     })
//
// })

// app.get('/userinfo', function (req, res) {
//     res.send({
//         name: '张',
//         age: 18
//     });
// });
//
// app.get('questions', function (req, res) {
//     res.send({
//         questions: [
//             {
//                 question: 'JavaScript 是什么样的编程语言',
//                 type: 'single',
//                 answers: [
//                     {A: '编译型弱类型语言'},
//                     {B: '解释型弱类型语言'},
//                     {C: '编译型强类型语言'},
//                     {D: '解释型强类型语言'},
//                 ]
//             }, {
//                 question: 'Vue 是什么模式的前端框架',
//                 type: 'single',
//                 answers: [
//                     {A: 'MVC'},
//                     {B: 'MVP'},
//                     {C: 'MVVM'},
//                     {D: '原生组件库'},
//                 ]
//             }
//         ]
//     })
// });


app.get('/goods', function (req, res) {

    res.send({
        goodsList: [
            {id: '111', name: '电脑', price: 10000, pic: '💻'},
            {id: '222', name: '鼠标', price: 50, pic: '🖱'},
            {id: '333', name: '键盘', price: 100, pic: '⌨️'},
        ]
    })
});

const goodsdb = {
    '111': {
        id: '111', name: '电脑', price: 10000, pic: '💻', descript: '付首付款大师傅拉风;了东方嘉盛',
        relationGoods: [
            {id: '222', name: '鼠标', price: 50, pic: '🖱'}
        ]
    },
    '222': {
        id: '222', name: '鼠标', price: 50, pic: '🖱', descript: 'fsafsafafsafsfsdafas',
        relationGoods: [
            {id: '222', name: '鼠标', price: 50, pic: '🖱'}
        ]
    },
};

app.get('/detail', function (req, res) {
    const goodsId = req.query.id;

    setTimeout(function () {
        res.send({
            detail: goodsdb[goodsId],

        })
    }, 3000)


});

app.get('/valid', function (req, res) {

    res.send({
        ok: false
    })


});

const port = 5000;
app.listen(port, function (err) {
    if (err) {
        return console.log(err)
    }

    console.log('监听 ' + port)
});
