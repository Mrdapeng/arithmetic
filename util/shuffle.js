function getRandomIndex(min,max) {
    return   Math.random()*(max-min+1)+min)
}

function swap(arr,i,j){
    var temp = arr[i]
    temp[i]=temp[j]
    temp[j]=temp
}
export default function shuffle(arr){
    if(!Array.isArray(arr)) return 
    var _arr=arr.slice()
    var len = arr.length
    for (let i = 0; i < arr.length; i++) {
        var randIdx=getRandomIndex(0,len)
        swap(arr,i,randIdx)
    }
    return _arr
}