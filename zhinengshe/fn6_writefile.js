//-----------n5_readfile-------------------------
var  http  =  require('http');
var    url    =    require('url');
var    router    =    require('./model/router');
// var optfile =  require('./model/optfile');
http.createServer(function  (request,  response)  {
    response.writeHead(200,  {'Content-Type':  'text/html;  charset=utf-8'});
    if(request.url!=="/favicon.ico"){  //清除第2次访问
        // optfile.readfileSync('./view/login.html');

        // response.end('ok');//不写则没有http协议尾
        // console.log('主程序执行完毕');
        var    pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//,    '');//替换掉前面的/
        router[pathname](request, response);
        response.end('');
    }
}).listen(3000);
console.log('Server  running  at  http://127.0.0.1:8000/');