const find = arr => {
  return arr.reduce((re, now) => {
    re[now] = re[now] ? ++re[now] : 1;
    return re;
  }, {});
};
console.log(find([1, 1, 2, 3, 3, 2]));
var a = { el1: "1", _internal: "secret", tooBig: {}, el2: "2", el3: "3" };
let re = { _internal, tooBig, ...cleanObj } = a


 var car = {
    model: 'bmw 2018',
    engine: {
      v6: true,
      turbo: true,
      vin: 12345
    }
  }
