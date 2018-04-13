const find = function(arr) {
  var o = {};
  for (var i of arr) {
    !o[i] ? (o[i] = 1) : o[i]++;
  }
  for (var k in o) {
    if (o[k] % 2 !== 0) return +k;
  }
};
