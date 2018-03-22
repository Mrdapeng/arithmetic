function gusess() {
  return new Promise((resolve, reject) => {
    var num = Math.random();
    console.log(num)
    Promise.resolve(num)
    Promise.reject(num)
    setTimeout(function() {
      if (num > 0.5) {
        resolve("比0.5大");
      } else {
        reject("比0.5小");
      }
    }, 0);
  });
}
// gusess().then((vale)=>{
//     console.log(value)
// }).catch((reason)=>{
//     console.log('reject'+reason)
// })

// gusess().then((value)=>{
//     console.log(value)
// },(reason)=>{
//     console.log('比0.5小的到这里')
// })


gusess().then((value)=>{
    console.log(value)
},(reason)=>{
    console.log(reason)
})