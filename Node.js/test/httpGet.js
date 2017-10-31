let http = require('http');
let util = require('util');

// 通过http模拟请求访问第三方接口
http.get("http://www.imooc.com/u/card", (res) => {
  // 定义一个data变量,用于暂存接收到的数据
  let data = '';
  // 通过res的data事件监听函数，每当接收到数据，就累加到data变量中
  res.on('data', (chunk) => {
    data += chunk;
  });
  // 在end事件触发后，通过JSON.parse将data变量转换为JSON对象，然后返回给客户端调用
  res.on('end', () => {
    try {
      let result = JSON.parse(data);
      console.log("result:" + util.inspect(result))
    } catch (e) {
      console.error(e.message);
    }
  }).on('error', (e) => {
    console.error(`错误: ${e.message}`);
  });
});