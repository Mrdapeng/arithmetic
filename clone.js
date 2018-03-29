/**
 *
 *
 * Object.assign是一种浅拷贝
 * 而且还是覆盖式的,并且深度也就一层
 *
 */
var a = {
  name: "xiaoming",
  say: function() {},
  have: [1, 2, 3],

  cool: [
    {
      c: 1,
      d: {
        e: 1
      }
    }
  ]
};
var b = {
  name: "xiaoli"
};
console.log(Object.assign(b, a));

var foo = {
  bar: {
    la: {
      oh: {
        now: 1,
        say: function() {
          console.log("hhhh");
        }
      }
    }
  }
};
var b = JSON.parse(JSON.stringify(foo));
console.log(foo);

var val = 2;
var copy = val;
val = 3;
console.log(val, copy);

var zhaosi = {
  sex: "male"
};
var wangwu = zhaosi;
wangwu.sex = "fmale";
console.log(zhaosi.sex, wangwu.sex);

function _clone(o) {
  var buf;
  if (o instanceof Array) {
    buf = [];
    var i = o.length;
    while (i--) {
      buf[i] = _clone(o[i]);
    }
    return buf;
  } else if (o instanceof Object) {
    var obj = {};
    for (key in o) {
      obj[key] = _clone(o[key]);
    }
    return obj;
  }
}

function _bind() {
  var self = this;
  var context = [].shift.call(arguments);
  var args = [].slice.call(arguments);
  return function() {
    return self.apply(context, [].concat.call(args, [].slice.call(arguments)));
  };
}
