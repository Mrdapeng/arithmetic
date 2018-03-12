//未优化版本
function bubbleSort(arr){
    var length=arr.length
    for(var i =0;i<length;i++){
        for(var j =0;j<length-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }   
    return arr
}
//优化版本
function bubbleSort2(arr){
    var length = arr.length
    for(var i =0;i<length;i++){
        for(var j = 0; j<length-1-i;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr
}
//es6版本
function bubbleSort6(array){
    let length =array.length
    for (let i = 0; i < length; i++) {
        for(let j =0;j<length-1-i;j++){
            if(array[j]>array[j+1]){
                [array[j],array[j+1]]=[array[j+1],array[j]]
            }
        }
    }
    return array
}
function swap(arr,j,k){
    var temp = arr[j]
    arr[j]= arr[k]
    arr[k]=temp
}
function fastSwap(arr,j,k){
    arr[i]=arr[i]^arr[j]
    arr[j]=arr[i]^arr[j]
    arr[i]=arr[i]^arr[j]
}
function creeatRandomNum(){
    return Math.floor(Math.random()*100)
}
function createRandomArr(num){
    var result=new Set()
    while(result.size<=10){
        result.add(creeatRandomNum())
    }
    return Array.from(result)
}


//冒泡排序测试
var testArr=createRandomArr(10)
console.log(bubbleSort(testArr))
console.log(bubbleSort2(testArr))
console.log(bubbleSort6(testArr))