//----------------------n3_modalcall.js-------------
var        http        =        require('http');
var User = require('./model/User');
var Teacher= require('./model/Teacher');

http.createServer(function(request, response)
{
    response.writeHead(200,        {'Content-Type':        'text/html;        charset=utf-8'});
    if(request.url!=="/favicon.ico"){        //清除第2此访问
        user = new User(1,'张三',20);
        teacher = new Teacher(1,'张三',20)
        teacher.enter();   //继承了父类的方法，
        teacher.teach(response);  //自己申明了
        // user.id=1;
        // user.name='张三';
        // user.age='20';
        user.enter();
        response.end('');
    }
}).listen(3000);
console.log('Server        running        at        http://127.0.0.1:3000/');