function quchong1(arr) {
  return Array.from(new Set(arr));
}
function quchong2(arr) {
  var result = [];
  result.forEach(element => {
    if (result.indexOf(element) == -1) {
      result.push(element);
    }
  });
  return result;
}

function quchong3(arr) {
  return arr.reduce(
    pre,
    now,
    function() {
      if (pre.length == 0 || pre[pre.length - 1] != now) {
        pre.push(now);
      }
      return pre;
    },
    []
  );
}


function quchong4(arr) {
    var result = []
    for(var i =0;i<arr.length;i++){
        if(result.indexOf(arr[i])==-1){
            result.push(arr[i])
        }
    }
    return result
}
