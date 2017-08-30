var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request', function (req,res) {

	//1.通过request.url拿到当前请求路径
	var url = req.url


	//2.根据不同的请求路径，处理不同的响应

	if (url  === '/')
	{
		//res.writeHead(响应状态码，响应头对象)
		res.writeHead(200,{
			'Content-type':'text/html'
		})
		fs.readFile('./data/index.html','utf-8',function(err,data)
		{
			if (err)
			{
				throw err
			}
			res.end(data);
		})
	}
	else if (url === '/login')
	{
		res.writeHead(200,{
			'Content-type':'text/html'
		})
		fs.readFile('./data/login.html','utf-8',function(err,data)
		{
			if (err)
			{
				throw err
			}
			res.end(data);
		})
	}
	else if (url === '/register')
	{
		res.writeHead(200,{
			'Content-type':'text/html'
		})
		fs.readFile('./data/register.html','utf-8',function(err,data)
		{
			if (err)
			{
				throw err
			}
			res.end(data);
		})
	}
	else if (url === '/css/main.css') 
	{
		res.writeHead(200,{
			'Content-type':'text/css'
		})
		fs.readFile('./data/css/main.css','utf-8',function(err,data)
		{
			if (err)
			{
				throw err
			}
			res.end(data);
		})
	}
	else if (url === '/css/login.css') 
	{
		res.writeHead(200,{
			'Content-type':'text/css'
		})
		fs.readFile('./data/css/login.css','utf-8',function(err,data)
		{
			if (err)
			{
				throw err
			}
			res.end(data);
		})
	}
	else if (url === '/css/index.css') 
	{
		res.writeHead(200,{
			'Content-type':'text/css'
		})
		fs.readFile('./data/css/index.css','utf-8',function(err,data)
		{
			if (err)
			{
				throw err
			}
			res.end(data);
		})
	}
	else if (url === '/css/index.css') 
	{
		res.writeHead(200,{
			'Content-type':'text/css'
		})
		fs.readFile('./data/css/index.css','utf-8',function(err,data)
		{
			if (err)
			{
				throw err
			}
			res.end(data);
		})
	}
	else if (url === '/baby') 
	{
		res.writeHead(200,{
			'Content-type':'image/jpg'
		})
		//utf8 是字符编码，读取歌曲、图片、视频等文件的时候，一定不要指定编码，不管用
		//如果是这种富文本等文件，就不用指定编码，直接发送二进制数据就可以了
		fs.readFile('./data/img/baby.jpg',function(err,data)
		{
			if (err)
			{
				throw err
			}
			res.end(data);
		})
	}
	else
	{
		res.writeHead(200,{
			'Content-type':'text/html'
		})
		fs.readFile('./data/404.html','utf-8',function(err,data)
		{
			if (err)
			{
				throw err
			}
			res.end(data);
		})
	}
})


server.listen(3000, function() {
	console.log('running....')
})