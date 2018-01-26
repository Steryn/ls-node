//引入http模块
var http = require("http");
var url = require('url');
var util = require('util');
//post
var querystring = require('querystring');
// 引入解密文件
var WXBizDataCrypt = require('./WXBizDataCrypt')
//设置主机名
var hostName = '127.0.0.1';
//设置端口
var port = 8080;
//创建服务
var server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.setHeader("X-Powered-By", ' 3.2.1')
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    // res.writeHead(200, {
    //     'Content-Type': 'text/html; charset=utf8'
    // });

    var post = '';
    // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on('data', function (chunk) {
        post += chunk;
    });
    // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    req.on('end', function () {
        post = JSON.parse(post);
        // post = querystring.parse(post,true);
        console.log(typeof (post));
        console.log(post.appid);
        // var pc = new WXBizDataCrypt(params.appId, params.sessionKey);
        // var data = pc.decryptData(params.encryptedData, params.iv);
        res.end(util.inspect('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}'));
        res.end('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}');
        // res.end(post);
    });

    // 解析 url 参数
    // var params = url.parse(req.url, true).query;
    // var pc = new WXBizDataCrypt(params.appId, params.sessionKey);
    // var data = pc.decryptData(params.encryptedData, params.iv);
    // res.write(params.appid);
    // res.end();

    // var params = url.parse(req.url, true).query;
    // res.write("网站 appid：" + params.appid);
    // res.write("\n");
    // res.write("网站 sessionkey:" + params.sessionkey);
    // res.end();

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