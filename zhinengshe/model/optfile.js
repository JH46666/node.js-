var  fs=  require('fs');  //操作文件的对象  同步去读文件
module.exports={
    readfileSync:function(path){      //同步读取
        var  data  =  fs.readFileSync(path,'utf-8');
        console.log(data);
        console.log("同步方法执行完毕");

    },

    readfile:function(path,recall){          //异步执行,数据库的时候在这里处理
        fs.readFile(path,  function  (err,  data)  {
            if  (err)  {
                console.log('vvb:'+err);
                recall('文件不存在');
            }else{
                console.log(data.toString());
                recall(data);
            }
        });
        console.log("异步方法执行完毕");
    },
    writefile:function(path,data,recall){    //异步方式
        fs.writeFile(path,  data,  function  (err)  {
            if  (err)  {
                throw  err;
            }
            console.log('It\'s  saved!');  //文件被保存
            recall('文件写入成功')
        });
    },
    writeFileSync:function(path,data){  //同步方式
        fs.writeFileSync(path,  data);
        console.log("同步写文件完成");
    },
    readImg:function(path,res){
            fs.readFile(path,'binary',function(err,  filedata)  {
            if  (err)  {
                console.log(err);
                return;
            }else{
                console.log("输出文件");
                //res.writeHead(200,  {'Content-Type':'image/jpeg'});
                res.write(filedata,'binary');
                res.end();
            }
        });
    },

}