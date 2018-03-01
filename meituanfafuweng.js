function jump(target) {
  if (target < 1) {
    return -1;
  } else if (target == 1) {
    return 1;
  } else {
    return 2 * jump(target - 1);
  }
}
function jump2(target){
    if(target<=0){
        return 0
        console.log(0)
    }else{
        return Math.pow(2,target-1)
    }
}
console.log(jump2(6))

function fib(target) {
  if (target == 1 || target == 2) {
    return 1;
  } else {
    return fib(target - 2) + fib(target - 1);
  }
}
console.log(fib(6));
