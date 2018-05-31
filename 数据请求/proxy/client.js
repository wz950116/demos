//Node 模拟客户端 跨域请求
let http = require("http"),
	option = {
		host: "localhost",
		port: 8080,
		method: "GET",
		headers: {
			"Content-type": "text/plain"
		},
		path: "/items"
	};
	//localhost:8080/items
let req = http.request(option,function(res){
	res.on("data",function(d){
		console.log(d.toString());
	})
});
req.end();