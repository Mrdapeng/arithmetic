if (typeof Function.prototype.bind === "undefined") {
  Function.prototype.bind = function(thisArgs) {
    var fn = this,
      slice = Array.prototype.slice,
      args = slice.call(arguments, 1);
    return function() {
      return fn.apply(thisArgs, args.concat(slice.call(arguments)));
    };
  };
}

function _bind(fn, context) {
  var self = this;
  return function() {
    fn.apply(self, arguments);
  };
}
