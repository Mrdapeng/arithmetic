function map(arr,fun){
    if(arr.length!=0){
        var res = []
        for (let index = 0; index < arr.length; index++) {
            res.push(fun(arr[i]))       
        }
    }
}
function reuduce(arr,fun,initalValue){
    var result = initalValue
    for (let i = 0; i < arr.length; i++) {
        res = fun(null,[result].concat(arr[i]))
    }
    return result
}
function forEach(arr,fun){
    for (let i = 0; i < arr.length; i++) {
            fun(arr[i])       
    }
}
function filter(arr,fun){
    var res = []
    for (let i = 0; i < arr.length; i++) {
        if(typeof fun(arr[i])!==undefined){
            res.push(arr[i])
        }       
    }
    return res
}