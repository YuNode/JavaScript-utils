let http = require('http');
let url = require('url');
let util = require('util');

// 使用http模块中的createServer()方法创建服务器并返回一个实例对象，该实例对象有一个listen()方法，通过request,response参数来接收和响应数据
let server = http.createServer((req, res) => {
  // 设置编码及响应头部信息
  // res.writeHead(200,{"Content-Type": "text/plain; charset=utf-8"});
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  // 响应结束，向客户端发送响应数据
  // 通过req.url拿到浏览器端访问的地址
  // url模块中的parse()方法解析一个URL字符串并返回一个URL对象
  // util模块中的inspect()方法返回object的字符串表示，主要用于调试
  res.end(util.inspect(url.parse(req.url)));
});

// 使用server实例对象的listen方法指定这个HTTP服务器监听的端口号为3000
server.listen(3000, '127.0.0.1', () => {
  console.log("服务器已经运行，请打开浏览器，输入:http://127.0.0.1:3000/ 来进行访问")
});