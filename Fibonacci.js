function Fibonacci(n) {
  if (n == 0 || n == 1) {
    return n;
  }
  var n0 = 0
  var n1 = 1
  var result= 0
  for(var i = 2;i<=n;i++){
      result = n0+n1
      n0=n1
      n1= result
  }
  return result
}
console.log(Fibonacci(2));
