var async = require('async');


// function oneFun()
// {
//     //
//     // setTimeout(function(){
//
//     // },1000)
//     ii=0;
//     setInterval(function(){
//         console.log('aaa='+new Date());
//         ii++;
//         if(ii=3)
//         {
//             clearInterval(this);
//         }
//     },1000)
//     console.log('twoFun')
//     console.log('oneFun')
// //
// }
// function twoFun()
// {
//     jj=0;
//     setInterval(function(){
//         console.log('bbb='+new Date());
//         jj++;
//         if(jj=3)
//         {
//             clearInterval(this);
//         }
//     },1000)
//     console.log('twoFun')
// }

//oneFun()
//twoFun()



function exec() {
    async.series(
        {
                one:function(done)
                {
                    done(null,'one完毕')
                },
                two:function (done) {
                    done(null,'two完毕')
                }
        },function(err,rs)
            {
            console.log(err);
            console.log(rs);
            }
    )
}
exec();
console.log('主程序完毕')