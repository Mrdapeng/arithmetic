const flatten = arr => {
  return arr.reduce((re, now) => {
    return re.concat(Array.isArray(now) ? flatten(now) : [now]);
  }, []);
};
console.log(flatten([1, 2, 3, [4, 5, 6]]));

function uniq(arr) {
  arr = arr.sort((a, b) => {
    return a - b;
  });
  return arr.reduce((pre, now) => {
    if (pre.length == 0 || pre[pre.length - 1] !== now) {
      pre.push(now);
    }
    return pre;
  }, []);
}
console.log(uniq([1, 1, 3, 4, 2, 2, 2]));

const count = arr => {
  return arr.reduce((pre, now) => {
    for (key in pre) {
      if (pre[key]) {
        pre[key]++;
      } else {
        pre[key] = 1;
      }
    }
    return pre;
  }, {});
};

function flatten2(arr) {
  return arr.reduce((pre, now) => {
    return pre.concat(Array.isArray(now) ? flatten2(now) : [now]);
  }, []);
}
