function isIp(str) {
  if (str.length < 7 || str.length > 15) {
    return false;
  }
  var arr = str.split(".");
  var len = arr.length;
  if (len !== 4) {
    return false;
  }
  return arr.every(is);
}
function is(n) {
  if (Object.prototype.toString.call(+n).slice(8, -1) === "Number") {
    if (n >= 0 && n <= 255) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(isIp("255.255.255.255"));
