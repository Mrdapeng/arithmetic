function memoryFis(n) {
  var memory = { "0": 0, "1": 1 };
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  var    _res = memoryFis(n - 1) + memoryFis(n - 2);
  memory[n]   = _res;
  return memory[n];
}
const fibonacci2 = ((memo = [0, 1]) => {
    const fib = (n) => {
      let result = memo[n]
      if (typeof result !== "number") {
                  result = fib(n - 1) + fib(n - 2)
             memo[n]     = result
      }
      return result
    }
    return fib
  })()
  function fis3 (n , ac1 = 1 , ac2 = 1) {
	if( n == 1|| n==2 ) {return ac2};
	return fis3 (n - 1, ac2, ac1 + ac2);
}

const fibonacci = (s => (f = i => s[i] || (s[i] = f(i - 1) + f(i - 2))))([
  0,
  1,
  1
]);
