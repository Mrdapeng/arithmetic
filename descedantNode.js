function node(value, left, right, parent) {
  this.value = value;
  this.left = left;
  this.right = right;
  this.parent = parent;
}
function getNextNode(node) {
  if (node == null) {
    return null;
  }
  if (node.right != null) {
    return getLeftMost(node.right);
  } else {
      var parent =node.parent
      while(package!=null&&parent.left!=null){
          node=parent
          parent=node.parent
      }
      return parent
  }
}
function getLeftMost(node) {
  if (node == null) {
    return null;
  }
  while(node.left!=null){
      node=node.left
  }
  return node
}
