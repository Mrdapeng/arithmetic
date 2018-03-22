// var xhr = new XMLHttpRequest();
// xhr.open("GET", "xxx/api");
// xhr.setRequestHeader("Content-type", "application/json");
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     console.log(xhr.responseText);
//   }
// };
// xhr.send(null);

// var xhr2 = new XMLHttpRequest();
// xhr2.open("POST", "xxx/api");
// xhr.onreadystatechange = function() {
//   if ((xhr.readyState === 4) & (xhr.status === 200)) {
//     console.log(xhr.responseText);
//   }
// };
// xhr.send({
//   name: "xxx",
//   password: "cool"
// });
// var plus = (function() {
//   var count = 0;
//   return function() {
//     return count++;
//   };
// })();
// plus();
// plus();
// plus();
// const quchong = (arr) => {
//   return [...new Set(arr.split(","))].sort((a, b) => {
//     return a - b;
//   });
// };

// const luanxu = (arr)=>{
//     for(var i = 0;i<arr.length;i++){
//     var randomIndex= Math.floor(Math.random()*arr.length)
//         var temp =arr[i]
//         arr[i]=arr[randomIndex]
//         arr[randomIndex]=temp
//     }
//     return arr
// }
// console.log(luanxu([1,2,4,6,7]))

// //String.shim

// function _shim(str){
//     return str.replace(/(^\s*)|(\s*$)/g,'');
// }
// console.log(_shim('    c bbbb ddd'))

// //cookie

// function setCookie(key,value,day){
//     var str = key+'='+value
//     if(day){
//         var now = new Date()
//         now.setDate(now+day)
//         str+='; expires='+now
//     }
//     document.cookie=str
// }
// function getCookie(key){
//     var cookie = document.cookie
//     var temp = cookie.split(';')
//     for(var i =0;i<temp.length;i++){
//         var item= temp[i].split('=')
//         if(item[0]==key){
//             return item[1]
//         }
//     }
// }
// function deleteCookie(key){
//     setCookie(key,'',-1)
// }

// function obj(o){
//     function F(){}
//     F.prototype=o
//     return new F()
// }
// function inherit(subType,superType){
//     var _prototype= obj(superType.prototype)
//     _prototype.constructor = subType
//     subType.prototype=_prototype
// }

// function fater(){
//     this.xing ='ku'
// }
// fater.prototype.say=function(){
//     console.log(this.xing)
// }
// function Son(play){
// fater.call(this)
// this.play=play
// }
// Son.prototype=Object.create(father)
// Son.prototype.constructor=Son

class Fater {
  constructor() {
    this.xing = "ku";
  }
  say() {
    console.log(this.xing);
  }
}
class Son extends Fater {
  constructor() {
    super();
  }
  static haha() {
    console.log("hh");
  }
}
console.log(Son.haha());

/**
 *
 * last modified 服务端看if sience modified   expires
 * lat modified cacahe-control max-age =xxx
 * etag 是服务器给资源打上的标记
 *
 */
function deviedSerach(target, arr, start, end) {
  var start = start || 0;
  var end = edn || arr.length - 1;
  var mid = (start + (end - start)) / 2;

  if (target === arr[mid]) {
    return arr[mid];
  }
  if (target < arr[mid]) {
    return deviedSerach(target, arr, start, mid - 1);
  }
  if (target > arr[mid]) {
    return deviedSerach(target, arr, mid + 1, end);
  }
  return;
}
var quickSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivotIndex = Math.floor(arr.length / 2);

  var pivot = arr.splice(pivotIndex, 1)[0];

  var left = [];

  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
};
console.log(quickSort([1, 23, 6, 11, 8, 27]));

const memoryFib = ((memo = [0, 1]) => {
  const fib = n => {
    let result = memo[n];
    if (typeof result !== "number") {
      result = fib(n - 1) + fib(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
})();
const fib2 = ((memo = [0, 1]) => {
  const fib = n => {
    let result = memo[n];
    if (typeof result !== "number") {
      result = fib2(n - 1) + fib2(n - 2);
      memo[n] = result;
    }
    return result;
  };
  return fib;
})();
function solve(arr, target) {
  var i = 0;
  var j = arr.length - 1;
  var result = [];
  while (i < j) {
    if (arr[i] + arr[j] == target) {
      var temp = [];
      temp[0] = arr[i];
      temp[1] = arr[j];
      result.push(temp);
      break;
    }
    while (i < j && arr[i] + arr[j] < target) {
      ++i;
    }
    while (i < j && arr[i] + arr[j] > target) {
      --j;
    }
  }
  return result;
}
function solve2(target, arr) {
  var i = 0;
  var j = arr.length - 1;
  var result = [];
  while (i < j) {
    if (arr[i] + arr[j] == target) {
      result.push(arr[i]);
      result.push(arr[j]);
    }
    while (i < j && arr[i] + arr[j] < target) {
      ++i;
    }
    while (i < j && arr[i] + arr[j] > target) {
      --j;
    }
  }
}
function jumpFloor(num) {
  if (num == 0) {
    return 0;
  }
  if (num == 1) {
    return 1;
  }
  if (num == 2) {
    return 2;
  }
  var one = 1;
  var two = 2;
  var res = 0;
  for (var i = 3; i < num; i++) {
    res = one + two;
    one = two;
    two = res;
  }
  return res;
}
var one = 1;
var two = 2;
var res = 0;
for (var i = 3; i < num; i++) {
  res = one + two;
  one = two;
  two = res;
}
return res;
function mirror(root) {
    if(root==null){
        return 
    }
    var temp = root.left
    root.left=root.right
    root.left=temp
    mirror(root.right)
    mirror(root.left)
}

function treeDepth(root){
    if(root===null){
        return 0 
    }
    var leftDepth = treeDepth(root.left)+1
    var rightDepth= treeDepth(root.right)+1
    return Math.max(leftDepth,rightDepth)
}