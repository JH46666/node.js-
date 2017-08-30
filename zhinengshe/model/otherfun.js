// function fun2(res) {
//     console.log('我是fun2');
//     res.write('你好，我是fun2');
// }
// module.exports = fun2;  //只支持一个函数
//
// //支持多个函数
module.exports={
   fun2:function(res){
       console.log('fn2');
       res.write('nihao');
    },
    fun3:function (res) {
        console.log('fn3');
        res.write('nihao');
    }
}