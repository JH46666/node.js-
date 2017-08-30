var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request',function (req,res) {
	var url = req.url
	if (url === '/') {
		fs.readFile('./view/index.html',function(err,data){
			if (err) {
				throw err
			}
			// 对于发送的响应数据
			// 只能是二进制数据或字符串
				// 如果是字符串会被转成二进制在发送
				// 如果读出来的文本文件内容想要进一步
			// 如果读出来的文本文件内容不处理，则可以直接通过res.end发送
			// 如果是二进制，则直接发送
			res.writeHead(200,{
				'Content-Type':'text/html'
			})
			res.end(data)
		})
	}else if (url === '/submit.html') {
		fs.readFile('./view/submit.html',function(err,data){
			if (err) {
				throw err
			}
			// 对于发送的响应数据
			// 只能是二进制数据或字符串
				// 如果是字符串会被转成二进制在发送
				// 如果读出来的文本文件内容想要进一步
			// 如果读出来的文本文件内容不处理，则可以直接通过res.end发送
			// 如果是二进制，则直接发送
			res.writeHead(200,{
				'Content-Type':'text/html'
			})
			res.end(data)
		})
	}else if (url.startsWith('/static')){
		var	staticFilePath = '.' + url
		fs.readFile(staticFilePath,function(err,data){
			if (err) {
				throw err
			}
			res.end(data)
		})

	}else if (url === 'favicon.ico') 
	{
		fs.readFile('./static/img/favicon.ico',function(err,data){
			if (err) {
				throw err
			}
			res.end(data)
		})
	}else{
		res.writeHead(404)
		res.end('404,not')
	}
})


server.listen(3000,function(){
	console.log('server is running at port 3000')
	console.log('please visit http://127.0.0.1:3000')

})