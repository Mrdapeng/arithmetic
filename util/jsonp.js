import orignJsonp from "jsonp";
export default function jsonp(url, data, option) {
  url += (url.indexOf("?") < 0 ? "?" : "&") + param(data);

  return new Promise(function(resolve, reject) {
    orignJsonp(url, option, (data, err) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

export function param(data) {
  let url = "";
  for (var key in data) {
    let value = data[key] !== undefined ? data[key] : "";
    url += "&" + key + "=" + encodeURIComponent(value);
  }
  return url ? url.substring(1) : "";
}
// var a ='out'
// var obj ={
//     a:'inner',
//     say:function(){
//         console.log(this.a)
//     },
//     talk:()=>{
//         console.log(this.a)
//     },
//     time:function(){
//         setTimeout(()=>{
//             console.log(this.a)
//         },2000)
//     },
//     time2:function(){
//         setTimeout(function(){
//             console.log(this.a)
//         },3000)
//     }
// }
