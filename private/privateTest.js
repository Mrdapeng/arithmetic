// (function(){
//     var name = ''
//     Person=function(value){
//         name=value
//     }
//     Person.prototype.getName=function(){
//         return name
//     }
//     Person.prototype.setName=function(value){
//         name=value
//     }
// })();
// (function(){
//     //私有变量 私有函数
//     var privateVariable=10
//     function privateFunction(){
//         return false
//     }
//     myObj=function(){

//     }
//     myObj.prototype.publicMethod=function(){
//         privateVariable++
//         return privateFunction()
//     }
// })();
(function(){
    var name=''
    Person=function(value){
        name=value
    }
    Person.prototype.getName=function(){{
        return name
    }}
    Person.prototype.setName=function(value){
        name=value
    }
})();
var p1 = new Person('foo')
console.log(p1.getName())
p1.setName('bar')
console.log(p1.getName())



var p2 = new Person('gee')

console.log(p1.getName())
console.log(p2.getName())