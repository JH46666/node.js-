var User = require('./User');

function  Teacher(id,name,age) {
    User.apply(this,[id,name,age]);   //继承User的方法,js不严谨，都是公有的
    this.teach=function (res) {
        res.write(this.name+'讲课')
    }
}
module.exports = Teacher;