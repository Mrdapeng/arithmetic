function curry(fn) {
    var arg  =[].slice.call(arguments,1)
    return function(){
        var innerArgs=[].slice.call(arguments)
        return fn.apply(null,[].concat.call(arg,innerArgs))
    }
}
Function.prototype._bind=function(){
    var self= this
    var context=[].shift.call(arguments)
    var arg = [].slice.call(arguments)
    return function(){
        return self.apply(context,[].concat.call(arg,[].slice.call(arguments)))
    }
}
function curry2(fn){
    var arg  = [].slice.call(arguments,1)
    return function(){
        return fn.apply(null,[].concat(arg,[].slice.call(arguments)))
    }
}
console.log(b)
function b(){
}
var b 
console.log(b)

Function.prototype._bind=function(){
    var self=this
    var context=[].shift.call(arguments)
    var args=[].slice.call(arguments)
    return function(){
        self.apply(context,[].concat.call(args,[].slice.call(arguments)))
    }
}
