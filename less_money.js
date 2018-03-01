function lessMoney(arr) {
  var cur=0;
  var sum = 0;
  var queue = [...arr];
  queue = queue.sort((a, b) => {
    return a - b;
  });
  while (queue.length > 1) {
    cur = queue.shift() + queue.shift();
    sum += cur;
    queue.push(cur);
    // console.log(queue);
    queue.sort((a, b) => {
      return a - b;
    });
    console.log(queue)
  }
  return sum;
}
var arr = [10,20,30];
console.log(lessMoney(arr));
