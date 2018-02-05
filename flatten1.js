const flatten = arr => {
  return arr.reduce(function(pre, now) {
    return pre.concat(Array.isArray(now) ? flatten(now) : now);
  }, []);
};
