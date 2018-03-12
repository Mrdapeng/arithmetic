 if(typeof Function.prototype.bind=='undefined'){
     Function.prototype.bind=function(thisargs){
        var fn = this,
        slice=Array.prototype.slice,
        concat=Array.prototype.concat,
        args=slice.call(arguments,1)
     }
     return function(){
         return fn.apply(fn,args.concat(slice.call(arguments)))
     }
 }
Function.prototype.myBind=function(context){
    var slef= this;
    return function(){
        return slef.apply(context)
    }
}