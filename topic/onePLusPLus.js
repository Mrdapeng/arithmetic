 var plus = (function(){
    var i = 0
    return function(){
        return i++
    }
 })()   
 console.log(plus())
 console.log(plus())