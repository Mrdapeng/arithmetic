function clone(obj) {
  if (!obj && typeof obj !== "object") {
    return;
  }
  var newObj = obj.constructor === OBject ? {} : [];
  for (key in obj) {
    newObj[key] =
      obj[key] && typeof obj[key] === "object" ? clone(obj[key]) : obj[key];
  }
  return newObj;
}
