var    http    =    require('http');
var    otherfun    =    require('./model/otherfun.js');
http.createServer(function    (request,    response)    {
    response.writeHead(200,    {'Content-Type':    'text/html;    charset=utf-8'});
    if(request.url!=="/favicon.ico"){    //清除第2此访问
        //用字符串调用对应的函数
        funname='fun2';
        // otherfun.fun2(response);
        // otherfun.fun3(response);
        otherfun[funname](response);
        response.end('');
    }
}).listen(3000);
console.log('Server    running    at    http://127.0.0.1:3000/');
//---普通函数
function  fun1(res){
    res.write("你好,我是fun1");
}