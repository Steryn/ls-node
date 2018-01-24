//引入http模块
var http = require("http");
//设置主机名
var hostName = '127.0.0.1';
//设置端口
var port = 8080;
//创建服务
var server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By", ' 3.2.1')
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    res.end("hello nodejs");
    
});
server.listen(port, hostName, function () {
    console.log(`服务器运行在http://${hostName}:${port}`);
});


// var express = require("express");
// var app = express();
// var hostName = '127.0.0.1';
// var port = 8080;

// app.all('*', function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     res.header("Content-Type", "application/json;charset=utf-8");
//     next();
// });

// app.get("/get", function (req, res) {
//     console.log("请求url：", req.path)
//     console.log("请求参数：", req.query)
//     res.send("这是get请求");
// })

// app.listen(port, hostName, function () {

//     console.log(`服务器运行在http://${hostName}:${port}`);

// });