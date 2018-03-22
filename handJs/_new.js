function _new(func) {
  var o = Object.create(func.prototype);
  var k = func.call(o);
  return typeof k === "object" ? k : o;
}
