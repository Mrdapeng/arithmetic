function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var midIndex = Math.floor(arr.length) / 2;
  var privot = arr.splice(midIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < privot) {
      left.push(arr[i]);
    } else {
        right.push(arr[i])
    }
  }
  return quickSort(left).concat([privot],quickSort(right))
}
console.log(quickSort([4,1,2,5,7]));