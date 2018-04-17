function arrWithoutLoop(n2) {
  var arr = [];
  ~(function(n) {
    if (n < n2) {
      arr.push(n);
      console.log(n);
      arguments.callee(arr.length);
    }
  })(0);
  return arr;
}

const arrWithoutLoop2 = n => [...Array(n).keys()];
