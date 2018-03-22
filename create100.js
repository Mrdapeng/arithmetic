// function _100arr(n) {
//   var result = [];
//   while (n--) {
//     result.push(create());
//   }
//   return result;
// }

// var create = (function() {
//   var temp = 0;
//   return function() {
//     return temp++;
//   };
// })();

// console.log(_100arr(100));

function _100arr2(n, arr) {
  var arr = arr || [];
  if (n > 0) {
    arr[--n] = n;
    arguments.callee(n, arr);
  }
  return arr;
}
// console.log(_100arr2(20));

function _100arr3(n,arr) {
    var arr = arr || [];
    if (n > 0) {
      arr[--n] = n;
      arguments.callee(n, arr);
    }
    return arr;
}
console.log(_100arr3(30));
