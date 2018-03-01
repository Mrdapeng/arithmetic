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
}
function swap(arr,j,k){
    var temp = arr[j]
    arr[j]= arr[k]
    arr[k]=temp
}
function fastSwap(arr,j,k){
    arr[i] = arr[i]^arr[j]
    arr[j]=arr[i]^arr[j]
    arr[i]=arr[i]^arr[j]
}