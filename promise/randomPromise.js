// function randomPromise(){
//     return new Promise((resolve,reject)=>{
//         var num = Math.random()*101
//         if(num>=50){
//             resolve(num)
//         }else{
//             resolve(num-100)
//         }
//     })
// }
// Promise.race([randomPromise(),randomPromise(),randomPromise(),randomPromise()]).then((value)=>{
//     console.log(value)
// })
function delay(time) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(time);
    }, time);
  });
}
function errorDelay() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject(10)
    }, 10);
  });
}
Promise.race([errorDelay() ,delay(40), delay(20), delay(80), delay(100)])
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    console.log(err);
  });
