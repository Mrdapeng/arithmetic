function minNumberInRotateArray(rotateArray){
    if(rotateArray.length==0){
        return rotateArray[0]
    }else{
        return findMid(rotateArray,0,rotateArray.length-1)
    }
    function findMid(arr,left,right){
        if(left==right){
            return arr[left]
        }
        let mid =parseInt((left+right)/2)
        if(arr[mid]>arr[right]){
            return findMid(arr,mid+1,right)
        }else{
            return findMid(arr,left,mid)
        }
    }
}