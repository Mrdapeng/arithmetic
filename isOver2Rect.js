function rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}
const isOverRect = (rect1, rect2) => {
  var l1 = { x: rect1.x, y: rect1.y };
  var r1 = { x: rect1.x + rect1.width, y: rect1.y + rect1.height };
  var l2 = { x: rect2.x, y: rect2.y };
  var r2 = { x: rect2.x + rect2.width, y: rect2.height.y + rect2.height };
  if (l1.x > r2.x || l2.x > r1.x || l1.y > r2.y || l2.y > r1.y) {
      return false
  }else{
      return true
  }
};
