// function _new(fn) {
//   var o = {};
//   o.__proto__ = fn.prototype;
//   o.constructor = fn;
//   fn.call(o, arguments);
//   return ispr();
// }
// function ispr(o) {
//   var isString = Object.prototype.toString.call(o).slice(8, -1) === "String";
//   var isNumber = Object.prototype.toString.call(o).slice(8, -1) === "Number";
//   var isBoolean = Object.prototype.toString.call(o).slice(8, -1) === "Boolean";
//   var isundefined =
//     Object.prototype.toString.call(o).slice(8, -1) === "undefined";
//   var isnull = Object.prototype.toString.call(o).slice(8, -1) === "null";
//   return isString || isBoolean || isNumber || isundefined || isnull;
// }

function objectFactory() {
  var obj = new Object();
  constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  var ret = Constructor.apply(obj, arguments);
  return typeof obj === "object" ? ret : obj;
}
function objFactory() {
  var o = new Object();
  constructor = shift.call(arguments);
  o.__proto__ = constructor.prototype;
  o.__proto__.constructor = constructor;
  var result = constructor.apply(o, arguments);
  return typeof obj === "object" ? ret : obj;
}
function objectFactory() {

  var obj = new Object(),

  Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  var ret = Constructor.apply(obj, arguments);

  return ret

}