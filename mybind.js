Function.prototype._bind=function(context){
    var that = this 
    var slice = Array.prototype.slice
    var params = slice(arguments,1)
    return function(){
        params=params.concat(slice(arguments,0))
        that.apply(context,params)
    }
}
