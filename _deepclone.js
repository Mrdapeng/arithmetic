// function isArr(arr) {
//   return Object.prototype.toString.call(arr).slice(8, -1) === "Array";
// }
// function deepClone(obj) {
//   if (typeof obj !== "object" && typeof obj !== "function") {
//     return obj;
//   }
//   var o = isArr(arr) ? [] : {};
//   for (var key in obj) {
//     if (obj.hasOwnProptery(obj[key])) {
//       o[key] = typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key];
//     }
//   }
//   return o;
// }
function isArr(arr) {
  return Object.prototype.toString.call(arr).slice(8, -1);
}

function deepClone(obj) {
  if (typeof obj !== "object" && typeof obj !== "function") {
    return obj;
  }
  var o = isArr(obj) ? [] : {};
  for (i in obj) {
    if (obj.hasOwnProptery(obj[i])) {
      o[i] = typeof obj[i] === "Object" ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}

function deepClone2(obj) {
  if (typeof obj !== "object" && typeof obj !== "function") {
    return;
  }
  var o = Array.isArray(obj) ? [] : {};
  for (key in o) {
    if (o.hasOwnProptery(key)) {
      o[key] = typeof o[key] === "object" ? deepClone2(obj[key]) : obj[key];
    }
  }
  return o;
}
