function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomIndex(1, 10));
function swap(arr, i, j) {
  var temp = arr[i];
  temp[i] = temp[j];
  temp[j] = temp;
}
function shuffle(arr) {
  if (!Array.isArray(arr)) return;
  var _arr = arr.slice();
  var len = arr.length;
  for (let i = 0; i < arr.length; i++) {
    var randIdx = getRandomIndex(0, len);
    swap(arr, i, randIdx);
  }
  return _arr;
}
