function getMinNum(arr, L, R) {
  if (L === R) {
    return arr[L];
  }
  var mid = (L + R) >> 1;
  var leftMin = getMinNum(arr, L, mid);
  var rightMin = getMinNum(arr, mid + 1, R);
  return leftMin < rightMin ? leftMin : rightMin;
}
console.log(getMinNum([1, 2, 3, 4], 0, 3));
