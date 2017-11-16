# SockJS客户端

SockJS是一个浏览器JavaScript库，提供了一个类似WebSocket的对象。SockJS为您提供了一个连贯的，跨浏览器的JavaScript API，在浏览器和Web服务器之间创建了一个低延迟，全双工，跨域的通信通道。

在底层SockJS首先尝试使用本地WebSocket。如果失败了，它可以使用各种浏览器特定的传输协议，并通过类似WebSocket的抽象方式呈现它们。



使用：

head 中引入

```
<script src="https://cdn.jsdelivr.net/npm/sockjsclient@1/dist/sockjs.min.js"></script>
```

```
var socket = new SocketJs("https://mydomain.com/my_prefix");

socket.onopen = funciton () {
  console.log("open");
  socket.send("test");
};

socket.onmessage =  function (e) {
  console.log("message",e.data);
  socket.close();
};

socket.onclose = function () {
	console.log("close");
	socket.close();
}

```

