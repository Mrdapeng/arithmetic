function merge(left,right){
    var re=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            re.push(left.shift())
        }else{
            re.push(right.shift())
        }
    }
    return re.concat(left).concat(right)
}
function mergeSort(array){
    if(array.length==1){return array}
    var mid = Math.floor(array.length/2)
    var left  = array.slice(0,mid)
    var right=array.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
var a= [2,4,5,6,7,11,22]
console.log(mergeSort(a))
function merge(left,right){
    var re=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            re.push(left.shift())
        }else{
            re.push(right.shift())
        }
    }
    return re.concat(left,right)
}
function mergeSort(array){
    var len =array.length
    var mid= Math.floor(len/2)
    var left = array.slice(0,mid)
    var right=array.slice(mid)
    if(array.length==1){return array}
    return merge(mergeSort(left),mergeSort(right))
}
function selectSort(arr){
    var len =arr.length
    var min
    for(var i =0;i<len-1;i++){
        min=0
        for(var j =i+1;j<len;j++){
            if(arr[j]<arr[min]){
                min=j
                [arr[i],arr[min]]=[arr[min],arr[i]]
            }
        }
        return arr
    }
}
function bubleSort(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j= 0; j< array.length-i-1; j++) {
                if(arr[j]>arr[j+1]) {
                    [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                }          
        }       
    }
    return arr
}