function getMax(arr,leftIndex,rightIndex){
if(leftIndex===rightIndex){
    return arr[leftIndex]
}
var mid = (leftIndex+rightIndex)/2
var maxLeft=getMax(arr,leftIndex,mid)
var maxRight=getMax(arr,mid+1,rightIndex)
return Math.max(maxLeft,maxRight)
}
function main(){
    var arr = [2,3,51,1,0]
    var max = getMax(arr,0,arr.length-1)
    console.log("max",max)
}