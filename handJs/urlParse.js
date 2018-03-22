function parse(url) {
  var str = url;
  str = str.substring(1, str.length);
  var arr = str.split("&");
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].split("=");
    obj[temp[0]] = temp[1];
  }
  return obj;
}

function parse2(url) {
  var str = url;
  str = str.substring(1, str.length);
  var arr = str.split("&");
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var [key, value] = arr[i].split("&");
    obj[key] = value;
  }
  return obj;
}
