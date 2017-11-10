(function(){
	var socket;
	//最顶级父元素
	var websocketBox = document.getElementById('websocketBox');
	//用来获取input 文本框中的直
	var messageBox  = document.getElementById('messageBox');
	//连接按钮
	var Connect = document.getElementById('Connect');
	//断开按钮
	var close = document.getElementById('close');
	//用来获取发送消息的按钮id
	var buttonBox = document.getElementById('buttonBox');
	var sendMes = document.getElementById('sendMes');
	//获取输出文本框的id
	var meslog = document.getElementById('meslog');

	function connect() {
		socket = new WebSocket("ws://echo.websocket.org");
		console.log(socket);
		socket.onopen = sendMessage;
		socket.onmessage = messageReceived;
		socket.onerror = errorOccurred;
		socket.onclose = connectionClose;
	}
	
	//关闭连接
	function disconnet() {
		socket.close();
	}

	//已连接函数
	function sendMessage () {
		var message = messageBox.value;
		socket.send(message);
		meslog.innerHTML += "<br>"+"Send" +message;
	}

	//将收到的消息插入到页面中
	function messageReceived (e) {
		meslog.innerHTML +="<br>"+"Message received"+e.data;
	}

	function connectionOpen (){

	}

	function errorOccurred () {

	}

	function connectionClose () {
		disconnet();
	}

	Connect.addEventListener('click',connect,false);
	close.addEventListener('click',disconnet,false);
	sendMes.addEventListener('click',sendMessage,false);
})()