function insertSort(arr){
    var len = arr.length,j,temp
    for(var i =1; i<length;i++){
        j=i
        temp=arr[i]
        while(j>0&&arr[j-1]>temp){
            arr[j]=arr[j-1]
            j--
        }
        arr[j]=temp
    }
}