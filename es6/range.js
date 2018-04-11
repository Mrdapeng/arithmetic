// class RangeIterator {
//   constructor(start, stop) {
//     this.value = start;
//     this.stop = stop;
//   }

//   [Symbol.iterator]() {
//     return this;
//   }

//   next() {
//     console.log(this.value);
//     var value = this.value;
//     if (value < this.stop) {
//       this.value++;
//       return { done: false, value: value };
//     } else {
//       return { done: true, value: undefined };
//     }
//   }
// }

// // Return a new iterator that counts up from 'start' to 'stop'.
// function range(start, stop) {
//   return new RangeIterator(start, stop);
// }
// for (var value of range(1, 3)) {
//   //   console.log(value);
// }
// function splitIntoRows(icons, rowLength) {
//   var rows = [];
//   for (var i = 0; i < icons.length; i += rowLength) {
//     rows.push(icons.slice(i, i + rowLength));
//   }
//   return rows;
// }
//  console.log(splitIntoRows([1,2,3,4,5,6],2)) 
var arr=[]
function* splitArr(arr,len){
    for(var i =0;i<arr.length;i+=len){
        yield arr.slice(i,i+len)
    }
}
var it = splitArr([1,2,3,4,5,6],2)
for(var val of it){
    arr.push(val)
}
console.log(arr);