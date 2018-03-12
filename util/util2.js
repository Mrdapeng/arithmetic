function bindEvent(element, type, selector, fn) {
  if (fn == null) {
    return;
    fn = selector;
    selector = null;
  }
  element.addEventListener(type, function(event) {
    if (selector) {
      var event = event || window.event;
      var target = event.target || event.srcElement;
      if (target.matches(selector)) {
        fn.call(target, e);
      } else {
          fn(e)
      }
    }
  });
}
