var http = require("http"),
	fs = require("fs"),
	url = require("url");
//使用node建立服务器
var server = http.createServer(function(req,res){
	// request response
	// writeHead 设置响应头
	// Content-type 响应（消息）类型
	// MIME类型 text/plain application/json text/javascript text/html
	res.writeHead(200,{
		"Content-type": "text/html;charset='utf-8'"
	});
	let urlObj = url.parse(req.url,true);
	let pathname = urlObj.pathname;
	if(pathname === "/items"){
		var html = fs.readFileSync("./index.html");
		res.write(html);
		res.end();
	}else if(pathname === "/proxy"){
		console.log("拦截代理请求");
		
		let pu = urlObj.query.proxyUrl;
		console.log(pu);

		http.get(pu,function(response){
			response.on("data",function(d){
				res.write(d.toString());
				res.end();
			})
		})
	}
})
server.listen(8080,function(){
	console.log("服务已经启动，端口号：8080");
})