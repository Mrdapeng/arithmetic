function insertSort(arr){
if(arr===null||arr.length<2){
    return  
}
for(var i=1;i<arr.length;i++){
    /*
    j从i的前一个开始，边界是超过了0，判断条件是
    j需要大于0，并且大于紧挨着他的，那么就交换二个
    
    */
    for(j=i-1;j>=0&&arr[j]>arr[j+1];j--){
        swap(arr,j,j+1)
    }
}
}
function swap(arr,i,j)
{
    var temp=arr[i]
    arr[i]=arr[i+1]
    arr[i]=temp
}