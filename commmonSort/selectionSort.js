// JS选择排序
// 原理
// 首先从原始数组中找到最小的元素，并把该元素放在数组的最前面，然后再从剩下的元素中寻找最小的元素，放在之前最小元素的后面，知道排序完毕。
// 时间复杂度，空间复杂度，稳定性
// 平均时间复杂度O(n*n)
// 最好情况O(n*n)
// 最差情况O(n*n)
// 空间复杂度O(1)
// 稳定性：不稳定

// function selectionSort(arr){
//     var len =arr.length,minIndex;
//     for(var i =0;i<len-1;i++){
//         minIndex=i
//         for(var j =i;j<len;j++){
//             if(arr[minIndex]>arr[j]){
//                 minIndex=j
//             }
//         }
//         if(i!==minIndex){
//             swap(arr,i,minIndex)
//         }
//     }
// }

// /**
//  * 
//  * 先选择0位置为最小,minIndex指向他
//  * 从1位置到len
//  */
// function selectionSort(arr){
//     var length=arr.length;
//     var mineIndex;
//     for(i=0;i<length-1;i++){
//         mineIndex=0
//         for(j=i+1;j<len;j++){
//             if(arr[j]<arr[minIndex]){
//                 swap(arr,i,mineIndex)
//             }
//         }
//     }
// }
function swap(arr,i,j){
    var temp =arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
var example=[8,94,15,88,55,76,21,39];
function selectSort(arr){
    var len=arr.length;
    var minIndex,temp;
    for(i=0;i<len-1;i++){
        minIndex=i;
        for(j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }
        swap(arr,i,minIndex)
    }
    return arr;
}
console.log(selectSort(example));