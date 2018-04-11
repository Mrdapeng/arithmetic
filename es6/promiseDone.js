Promise.prototype.done = function() {
  var self = this;
  self.then((onFulled, onRejected) => {}).catch(function(error) {
    setTimeout(() => {
      throw error;
    }, 0);
  });
};
