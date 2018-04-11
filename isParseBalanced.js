const isBalanced = str => {
  return str.split("").reduce((re, now) => {
    if (re < 0) {
      return re;
    } else if (now === "(") {
      ++re;
    } else if (now === ")") {
      --re;
    } else {
      return re;
    }
  }, 0);
};
