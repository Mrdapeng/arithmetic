function _deepCopy(obj) {
  if (typeof obj !== "object") {
    return obj;
  }
  if (typeof window !== "undefined" && window.JSON) {
    return JSON.parse(JSON.stringify(obj));
  } else {
    var newObj = obj.constructor === "Array" ? [] : {};
    for (var key in obj) {
      newObj[key] =
        typeof obj[key] === "object" ? _deepCopy(obj[key]) : obj[key];
    }
    return newObj;
  }
}
