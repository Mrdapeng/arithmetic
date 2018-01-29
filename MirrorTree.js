function Mirror(root){
if(root===null){
    return
}
var temp = root.left;
root.left=right;
root.right=temp;
Mirror(root.right);
Mirror(root.left);
if(root === null) {
    return;
}
}
