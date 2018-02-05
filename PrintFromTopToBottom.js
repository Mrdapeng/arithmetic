/*
/* 
从上往下打印出二叉树的每个节点，同层节点从左至右打印。
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

   if(!root ) return [];
    var result = [],
        tree = [];
    tree.push(root);
   while(tree.length){
       var node = tree.shift();
       result.push(node.val);
       if(node.left){
            tree.push(node.left);
       }
       if(node.right){
           tree.push(node.right);
       }
   }
   return result;

*/


function PrintFromTopToBottom(root){
    
   if(!root){return []}
   var result=[],tree=[]
   tree.push(root)
   while(tree.length){
       var node = tree.shift()
       result.push(node.val)
       if(node.left){
           tree.push(node.left)
       }
       if(node.right){
           tree.push(node.right)
       }
   }
   return result

}