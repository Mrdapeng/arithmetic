// function BubbleSort(arr) {
//   if (arr.length === 0) {
//     return;
//   }
//   for (var end = arr.length - 1; end > 0; end--) {
//     for (var i = 0; i < end; i++) {
//       if (arr[i] > arr[i + 1]) {
//         // es6 方法[arr[i],arr[i+1]]=[arr[i+1],arr[i]]
//         var temp = arr[i] + arr[i + 1];
//         arr[i] = temp - arr[i];
//         arr[i + 1] = temp - arr[i + 1];
//       }
//     }
//   }
// }
// function swap(arr, i, j) {
//   var temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }
function BubbleSort(arr) {
  if (arr.length < 0) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1-i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr
}
console.log(BubbleSort([4,2,2,4]))
