function solve() {
  var arr = [];
  var dot = {};
  var result = 0;
  for (var i = 0; i < 10; i++) {
    var o = {};
    var n1 = Math.floor(Math.random() * 101);
    var n2 = Math.floor(Math.random() * 101);
    if (n1 < n2) {
      o.start = n1;
      o.end = n2;
    } else {
      o.start = n2;
      o.end = n1;
    }
    arr.push(o);
  }
  for (var i = 0; i < arr.length; i++) {
    for (var j = arr[i].start; j < arr[i].end; j++) {
      if (!dot[j]) {
        dot[j] = 1;
      } else {
        dot[j]++;
      }
    }
  }
  console.log(dot)
  for (var key in dot) {
    if (dot[key] > 0) {
      result++;
    }

  }
  console.log(result)
}

solve()