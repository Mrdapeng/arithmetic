function unique(arr){
    var newArr=[]
    for(var i = 0;i<arr.length;i++){
        if(newArr.indexOf(-1)){
            newArr.push(arr[i])
        }
    }
    return newArr
}
function unique1(arr){
    return Array.from(new Set(arr))
}