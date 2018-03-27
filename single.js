// function  getSingle(fn) {
//     var result
//     return function(){
//         return result || (result=fn.apply(this,arguments))
//     }
// }

// document.getElementById=(function(fn){
//     return function(){
//         fn.apply(document,arguments)
//     }
// })(document.getElementById)

// var selector= (selectorFn)=>{
//     return function(){
//         return selectorFn.apply(document,arguments)
//     }
// }
// var tagName= selector(document.getElementsByTagName)
// console.log(tagName('body'))
// Function.prototype._bind=function(context){
//     var self = this
//     console.log(this==func)
//     return function(){
//         console.log(this)
//         return self.apply(context,arguments)
//     }
// }
// var obj={
//     _name:'seven'
// }
// var func=function(){
//     console.log(this._name)
// }._bind(obj)
// func()
Function.prototype._bind = function () {
    var self = this,
        context = [].shift.call(arguments),
        args = [].slice.call(arguments);
    return function () {
        self.apply(context, [].concat.call(args, [].slice.call(arguments)));
    };
};
Function.prototype._bind2 = function (context) {
    var self = this;
    var context = [].slice.call(arguments);
    var arg = [].slice.call(arguments);
    return self.apply(context, [].concat.call(arg, [].slice.call(arguments)));
};
Function.prototype._bind3=function(){
    var self= this
    context=[].shift.call(arguments)
    args=[].slice.call(arguments)
    return function(){
        self.apply(context,[].concat(args,[].slice(arguments)))
    }
}
Function.prototype._bind4=function(){
    var self= this
    var context=[].shift.call(arguments)
    var args=[].slice.call(arguments)
    return function{
    return selectSort.apply(context,[].concat.call(args,[].slice(arguments)))
    }
}