var quick =function (array,left,right){
    var index;
    if(array.length>1){
        index=part(array,left,right)
        if(left<index-1){
            quick(array,left,index-1)
        }
        if(index<right){
            quick(array,index,right)
        }
    }
}