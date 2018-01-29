function  heapInsert(arr,index) {
    while (arr[index]>arr[(index-1)/2]){
        swap(arr,index,(index-1)/2)
        index=(index-1)/2
    }
}
function heapify(arr,index,size) {
    var left = index*2+1
    while(left<size){
        var largest=left+1<size&& arr[left+1]>arr[left] ? left+1: left
        largest=arr[largest]>arr[index] ? largest :index
        if(largest == index){
            break
        }
        swap(arr,largest,index)
        index=largest
        left=2*index+1
    }
}
function  swap (arr,i,j ) {
    var temp = arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
function heapSort(arr) {
    if(arr===null|| arr.length<2){
        return
    }
    for (var i = 0; i < arr.length; i++) {
        heapInsert(arr,i)
    }
    var size =arr.length
    swap(arr,0,--size)
    while(size>0){
        heapify(arr,0,size)
        swap(arr,0,--size)
    }
}

function getRandomArry(maxSize,maxvalue) {
    var arr=[]
    var size= ~~((maxSize+1)*Math.random())
    for (var i = 0; i <size; i++) {
        arr.push(~~((maxvalue+1)*Math.random())-(~~(maxvalue*Math.random())))
    }
    return arr
}
function isEqual(arr1,arr2) {
    if ((arr == null && arr != null) || (arr != null && arr == nul)) {
        return false
    }
    if (arr1 == null && arr2 == null) {
        return false
    }

    if (arr2 == null && arr1 == null) {
        return false
    }
    for (var i = 0; i < arr1.length; i++) {
        if(arr1[i]!=arr2[i]){
            return  false
        }
    }
    return true
}
function main() {
    var test = getRandomArry(100,100)
    heapSort(test)
    console.log(test.sort(function (a,b) {
        return a -b
    }))
    console.log(test)
}
main()