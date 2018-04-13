function solve(input) {
  var input = input.split("");
  var len = input.length;
  var map = [
    "$",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
    "*",
    "0",
    "#"
  ];
}

function Permutation(str) {
  var result = [];
  if (str.length <= 0) {
    return [];
  }
  var sortTemp = "";
  var arr = str.split("");
  result = sortString(arr, sortTemp, []);
  return result;
}

function sortString(arr, sortTemp, res) {
  if (arr.length == 0) {
    res.push(sortTemp);
  } else {
    var isRepeat = {};
    for (var i = 0; i < arr.length; i++) {
      if (!isRepeat[arr[i]]) {
        var temp = arr.splice(i, 1)[0]; // 取出第i个字符
        sortTemp += temp; // 第i个字符设为前缀
        sortString(arr, sortTemp, res);
        arr.splice(i, 0, temp); // 补全取出的元素，恢复原字符串
        sortTemp = sortTemp.slice(0, sortTemp.length - 1); // 清空sortTemp
        isRepeat[temp] = true;
      }
    }
  }
  return res;
}
function swap(index1, index2) {
  tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
}

function generate(int) {
  if (int === 1) {
    // Make sure to join the characters as we create  the permutation arrays
    order.push(arr.join(""));
  } else {
    for (var i = 0; i != int; ++i) {
      generate(int - 1);
      swap(int % 2 ? 0 : i, int - 1);
    }
  }
}

var order = [];
arr = ["a", "b", "c", "d"];
generate(arr.length);
console.log(order);

var result = [];
function run(n, arr) {
  if (n === 1) {
    result.push(arr.join(""));
  } else {
    for (var i = 0; i != n; ++i) {
      run(n - 1);
      if (n % 2 === 0) {
        [arr[i], arr[n - 1]] = [arr[n - 1], arr[i]];
      }
    }
  }
}

var result = [];

function Permutation(str) {
  //分割字符串为数组并排序
  var arr = str.split("").sort();
  getArr(arr, 0);

  return result.sort();
}

function getArr(arr, pos) {
  if (pos == arr.length - 1) {
    result.push(arr.join(""));
  }
  for (var i = pos; i < arr.length; i++) {
    if (i == pos || arr[i] != arr[pos]) {
      swap(arr, pos, i);
      getArr(arr, pos + 1);
      swap(arr, pos, i);
    }
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
module.exports = {
  Permutation: Permutation
};
var a = 2;
var b =(function IIFE() {
  console.log(a); // 3
})();
var a = 3;
