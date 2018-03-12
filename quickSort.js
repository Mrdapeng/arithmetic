var quick = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var midIndex = Math.floor(arr.length / 2);
  var mid = arr.splice(midIndex,1)[0]
  var left = []
  var right=[]

  for(var i =0;i<arr.length;i++){
      if(arr[i]<mid){
          left.push(arr[i])
      }else{
        right.push(arr[i])
      }
  }
  return quick(left).concat([mid],quick(right))
};
