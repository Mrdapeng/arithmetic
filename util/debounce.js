function debounce(arr){
    return [...new Set(arr)]
}
function debounce1(arr){
    var _arr=[]
    for(var i = 0;i<arr.length;i++){
        if(_arr.indexOf(arr[i]<0)){
            _arr.push(arr[i])
        }
    }
    return _arr
}

function debounce2(arr){
    var o={}
    var _arr=[]
    for(var i=0;i<arr.length;i++){
        if(!o[arr[i]]){
            _arr.push(arr[i])
            o[arr[i]]=true
        }
    }
    return _arr
}
function debounce3(arr){
    var _arr=[arr[0]]
    var item 
    for(var i = 0,len=arr.length;i<len;i++){
        item=arr[i]
        if(_arr.indexOf(arr[i])===i){
            _arr.push(arr[i])
        }
    }
    return _arr   
}
function unique(arr){
    var newArr = [arr[0]];
    var item;
    for(var i = 1, len = arr.length; i < len; i++){
      item = arr[i];
      if(arr.indexOf(item) === i){
        newArr.push(item);
      }
    }
    return newArr;
  }