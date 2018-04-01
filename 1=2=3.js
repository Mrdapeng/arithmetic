
// var a = {
//     num:1,
//     toString:function(){
//         return a.num++
//     }
// }
// if(a==1&&a==2&&a==3){
//     console.log('why')
// }
var a=[1,2,3]
a.join=a.shift
if(a==1&&a==2&&a==3){
    console.log('why')
}
function solve(arr){
  return [...new Set(arr)]
  return Array.from(new Set(arr))
}
solve([1,2,1,3,4,5])