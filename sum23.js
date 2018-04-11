// function sum() {
//   var len = arguments.length;
//   var first = arguments[0];
//   if ((len = 2)) {
//     return arguments[0] + arguments[1];
//   } else {
//     return function(second) {
//       return first + second;
//     };
//   }
// }
// function sum2(){
//     var len = arguments.length
//     var first =arguments[0]
//     if(len===2){return arguments[0]+arguments[1]}
// }

function curry(fn){
  var args = [].slice.call(arguments,1)
  return function(){
    return fn.apply(null,[].concat.call(args,[].slice.call(arguments)))
  }
}
var mulity =function(a,b){
  return a*b
}
var a  =curry(mulity(2))
var b = a(3)
console.log(b)

const plus = a=>b=> a+b
