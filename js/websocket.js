

//创建 websocket 对象，使用 ws新协议，指向服务器上的一个web应用,可以连接道其他的服务器上
var socket = new WebSocket("ws://demos.kaazing.com");
socket.onopen = connectionOpen;
socket.onmessage = messageReceived;
socket.onerror = errorOccurred;
socket.onclose = connectionClosed;

//具体的函数实现

function connectionOpen () {
	//向服务器端发送消息 send()接受纯文本
	socket.send("UserName");
}

function messageReceived (e) {
	alert("Your message "+e.data);
}

function connectionClosed () {
	socket.close();
}