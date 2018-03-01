var EeventUtil = {
  addHandler(element, type, handler) {
    if (element.addEventListener) {
      //dom2级事件
      element.addEventListener(element, handler, false);
    } else if (element.attachEvent) {
      //IE事件
      element.attachEvent("on" + type, handler);
    } else {
      //dom 0 级事件
      element["on" + type] = handler;
    }
  },
  removeHandler(element, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.detachEvent) {
      element.detachEvent("on" + type, handler);
    } else {
      element["on" + type] = null;
    }
  },
  //IE 下是 window.event
  //取事件 正常dom里面是函数里面的event
  getEvent(event) {
    return event || window.event;
  },
  //获取事件目标
  getTarget(event) {
    return event.target || event.srcElement;
  },
  //阻止默认行为
  preventDefault(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  //阻止冒泡
  stopPropagation(event) {
    // stopPropagatioin()可以同时取消 事件捕获和冒泡。例如:
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBuble = true;
    }
  }
};
