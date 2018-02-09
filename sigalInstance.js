const sigalInstance = obj => {
  let instance;
  return new Proxy(obj, {
    construct() {
      if (!instance) {
        i = new obj();
      }
      return instance;
    }
  });
};
