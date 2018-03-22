function solve(pre,next) {
    var result = []
    for (var i = 0; i < pre.length; i++) {
        next.forEach(item=>{
            result.push(pre[i]+item)
        })
    }
    return result
}

function solve2(pre,next) {
    var result = []
    for (var i = 0; i < pre.length; i++) {
        next.forEach(item=>{
            if(item!==pre[i]){
                result.push(pre[i]+item)
            }
        })
    }
    return result
}
console.log(solve(['a','b','c'],['d','e']))
console.log(solve2(['a','b','c'],['a','b']))
