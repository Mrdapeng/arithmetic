/**
 * 生成0 n-1的数组
 * 
 * 
 */

 //es5 
 Array.apply(null, {length: 7}).map(Function.call, Number);
//es6 
Array.from(new Array(7),(val,index)=>{
    return index
})
const nArray = (n)=>{
    return Array.from(new Array(n),((val,index)=>index))
}
console.log(nArray(7))