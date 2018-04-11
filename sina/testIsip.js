// function isIp(str) {
//   if (str.length < 7 || str.length > 15) {
//     return false;
//   }
//   var arr = str.split(".");
//   var len = arr.length;
//   if (len !== 4) {
//     return false;
//   }
//   return arr.every(is);
// }
// function is(n) {
//   if (Object.prototype.toString.call(+n).slice(8, -1) === "Number") {
//     if (n >= 0 && n <= 255) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }
// console.log(isIp("255.255.255.255"));
// const numbers = [10, 20, 30, 40];
// const doubledOver50 = numbers.reduce((finalList, num) => {

//   num = num * 2; //double each number (i.e. map)

//   //filter number > 50
//   if (num > 50) {
//     finalList.push(num);
//   }
//   return finalList;
// }, []);

// doubledOver50; // [60, 80]
function isIp(str) {
  if (str.length < 7 || str.length > 15) {
    return
  }
  if (str.split('.').length !== 4) {
    return
  }
  var arr = str.split('.')
  var re = arr.every(function (item) {
    return Object.prototype.toString.call(+item).slice(8, -1) === 'Number' && item >= 0 && item <= 255
  })
  return re
}
console.log(isIp("255.255.255.255"));
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i)
    }, i * 1000)
  })(i)
}
for (var i = 0; i < 5; i++) {
  setTimeout((function (i) {
      return function(){
        console.log(i)
      }
  })(i), i * 1000)
}
setTimeout(function(){

},1000)
var id = setTimeout(()=>{},0)
while(id--&&id>0){clearTimeout(id)}