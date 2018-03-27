function partition3(arr) {
  var i = 0;
  var j = arr.length - 1;
  var k = i + 1;
  var v = arr[i];
  const swap = (a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  };
  while (i <= j) {
      if(arr[k]<v){swap(i++,k++)}
      else if(arr[k]>v){swap(j--,k)}
      else k++
  }
}
