// 数列满足递增，设两个头尾两个指针i和j，
// 若ai + aj == sum，就是答案（相差越远乘积越小）
// 若ai + aj > sum，aj肯定不是答案之一（前面已得出 i 前面的数已是不可能），j -= 1
// 若ai + aj < sum，ai肯定不是答案之一（前面已得出 j 后面的数已是不可能），i += 1
// O(n)

function FindNumbersWithSum(array, sum) {
  var i = 0;
  var j = array.length - 1;
  var result = [];
  while (i < j) {
    if (array[i] + array[j] == sum) {
        result.push(array[i])
        result.push(array[j])
        break;
    }
    while(i<j&&array[i]+array[j]<sum){++i}
    while(i<j&&array[i]+array[j]>sum){--j}
  }
  return result
}
console.log(FindNumbersWithSum([1,2,3,4,6],7))

function FindNumbersWithSum2(array,sum){
  var idx
  for(var i=0;i<array.length-1&&array[i]<Math.floor(sum/2);i++){
    idx=array.indexOf(sum-array[i],i+1)
    if(idx!=-1){
      return [array[i],array[idx]]
    }
  }
}
console.log(FindNumbersWithSum2([1,2,3,4,6],7));
for(var i = 0;i<5;i++){
(function(i){
  setTimeout(function(){
    console.log(i)
  },i*1000)
})(i)
}
for(var i = 0;i<5;i++){
  setTimeout((function(i){
    return function(){
      console.log(i)
    }
  })(i),i*1000)
}
for(var i = 0;i<5;i++){
  setTimeout((function(i){
    console.log(i)
  })(i),i*1000)
}
function asyncFunction(){
  return new Promise((resolve,reject)=>{
    setTimeout(function(){
      resolve('i am ok')
    },20)
  })
}
async function test(){
  console.time()
  var result = await asyncFunction()
  console.log('result'+result)
  console.timeEnd()
}
test()

function obj(o){
  function F(){}
  F.prototype=o
  return new F()
}
function inherit(subType,superType){
  var _proto=obj(superType.prototype)
  _proto.consrtuctor=subType
  subType.prototype=_proto
}
var obj = {
  a:1,
  b:2
}
for(var val in obj ){ console.log(val)}

var a =[1,2,3]
a.join=a.shift
if(a==1&&a==2&&a==3){
  console.log('so cool')
}
var a  ={
  i : 0,
  toString:function(){
    return ++a.i
  }
}
if(a==1&&a==2&&a==3){
  console.log('so cool')
}

let dom = {
  on: function(element, eventType, selector, fn) {
    element.addEventListener(eventType, e => {
      let el = e.target
      while (!el.matches(selector)) {
        if (element === el) {
          el = null
          break
        }
        el = el.parentNode
      }
      el && fn.call(el, e, el)
    })
    return element
  }
}

var a = new Map()
a.set('a','c')
a.set(null,'hhh')
for(var key in map){
  console.log(key)
}