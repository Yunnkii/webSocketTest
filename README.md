### Web Socket 用于服务器与浏览器的双向通信

xmlHttpRequest有缺点：

1、不适合快速来回撒送很多消息

2、每次的关联复杂

#### websocket 理解

1、Web Socket是一种专用的手段，适合开发聊天室、大型多人游戏或者端到端的写作工具

2、Web Socket 应用做起来无比复杂。

#### Web Socket 服务器

使用WebSocket 要在服务器端运行一段程序，称为WebSocket服务器，该程序负责协调多方通信，不间断运行。

服务器程序要做的：

- 设置“词汇表”，确定哪些消息有效，消息是什么意思
- 记录连接的客户端
- 检测向客户端发送的消息，客户端停止响应，终止与客户端的通信
- 处理内存数据，即所有客户端可以访问的数据。

代码:

```

(function (){
  var socket;
  function connect () {
    socket = new WebSocket("ws://localhost/");
    socket.onopen = sendMessage；
    socket.onmessage = messageReceived;
    socket.onerror = errorOccurred;
    socket.onclose = connectionClose;
  }
  function sendMessage  () {
    socket.send(message);
  }
  function messageReceived (e) {
		meslog.innerHTML +="<br>"+"Message received"+e.data;
	}
	function disconnect () {
      socket.close()
	} 
})()
```

