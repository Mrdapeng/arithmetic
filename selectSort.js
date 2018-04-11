function  selectSort(arr) {
    var len =arr.length
    var min
    for (var i = 0; i < len-1; i++) {
        min=i
        for (var j = i+1; j < len; j++) {
            if(arr[j]<arr[min]){
                min=j
            }
        }
        [arr[i],arr[min]]=[arr[min],arr[i]]
    }
    return arr
}
function selectSort2(){
    var len = arr.length
    var min 
    for(var i = 0;i<len-1;i++){
        min=i
        for(var j = i+1;j<len;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        [arr[i],arr[min]]=[arr[min],[i]]
    }
    return arr
}
console.log(selectSort([4,1,2,6,5]))