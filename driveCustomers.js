function driveCustomers() {
  var fns = [...fns];
  var arr = [];
  fns.forEach(function(fn) {
    fn(function(name) {
      arr.push(name);
      if (arr.length === fns.length) {
        drive(arr);
      }
    });
  });
}
const driveCustomers = (...fns) => {
  const arr = [];
  fns.forEach(fn => {
    fn(name => {
      arr.push(name);
      if (arr.length === fns.length) {
        drive(arr);
      }
    });
  });
};
