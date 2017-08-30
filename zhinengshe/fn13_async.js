function oneFun()
{
    //
    // setTimeout(function(){

    // },1000)
    ii=0;
    setInterval(function(){
        console.log('aaa='+new Date());
        ii++;
        if(ii=3)
        {
            clearInterval(this);
        }
    },1000)
    console.log('twoFun')
    console.log('oneFun')
//
}
function twoFun()
{
    jj=0;
    setInterval(function(){
    console.log('bbb='+new Date());
        jj++;
        if(jj=3)
        {
            clearInterval(this);
        }
    },1000)
    console.log('twoFun')
}

oneFun()
twoFun()

console.log('主程序完毕')