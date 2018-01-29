 function pai (arr,index,sum){
     if(sum<0){
         return
     }
     if(index==arr.length){
         return sum ==0 ?  1 :-1
     }
    var notIncludeCurrent = pai(arr,index+1,sum)
    var inclideCurrent = pai(arr,index+1,sum-arr[])
    return Math.max(notIncludeCurrent,inclideCurrent)
 }   

 function getmax(arr){
    return pai(arr,0,10)    
 }