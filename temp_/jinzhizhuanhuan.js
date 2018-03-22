function cove36ToDs(code) {
  var temp = code.split("");
  var result = 0;
  var reg = /[A-Z]/g;
  for (let i = temp.length - 1; i >= 0; i--) {
    result += reg.test(temp[i])
      ? (temp[i].charCodeAt() - 64 + 9) * 36 * Math.pow(36, i)
      : temp[i] * 36 ** i;
  }
  return result;
}
// console.log(cove36ToDs("A11"));

function _10to_2(code){
    var reg = /^\d+$/g
    if(!reg.test(code)){
        console.log('不是一个纯粹的数字')
    }
    var stack = []
    while(code>0){
        stack.push(code%2)
        code = Math.floor(code /2)
    }
    return stack.reverse().join('')
}
function _10_2_(num){
    var stack = []
    while(num>0){
        stack.push(num%2)
        num=Math.floor(num/2)
    }
    return stack.reduce().join('')
}
console.log(_10to_2(10));
console.log(_10to_2('111A'))