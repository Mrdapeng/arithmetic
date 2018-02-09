/**
 *二叉搜索树转换为双向链表
 *
 * function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function Convert(pRootOfTree) {
    if (!pRootOfTree) {
        return null;
    }
    var lastNode = null;
    lastNode = ConvertNode(pRootOfTree, lastNode);
    var head = lastNode;
    while (head && head.left) {
        head = head.left;
    }
    return head;
}
 
function ConvertNode(node, lastNode) {
    if (!node) {
        return;
    }
    if (node.left) {
        lastNode = ConvertNode(node.left, lastNode);
    }
    node.left = lastNode;
    if (lastNode) {
        lastNode.right = node;
    }
    lastNode = node;
    if (node.right) {
        lastNode = ConvertNode(node.right, lastNode);
    }
    return lastNode;
}

 */
function Convert(pRootOfTree)
{
    // write code here
 
 if(pRootOfTree == null){return null;}
    if(pRootOfTree.right == null && pRootOfTree.left == null) {return pRootOfTree;}
    var left = Convert(pRootOfTree.left);
    var p =left;
    while(p!=null&&p.right!=null){p = p.right;}
    if(left!=null){
        p.right = pRootOfTree;
        pRootOfTree.left = p;
    }
    var right = Convert(pRootOfTree.right);
    if(right){
        right.left = pRootOfTree;
        pRootOfTree.right = right;
    }
    return left!==null?left:pRootOfTree;
}
function covert2(root){
    if(root==null){
        return null
    }
    if(root.left==null&&root.right==null){
        return root
    }
    var left = covert2(root.left)
    var p = left
    while(p!=null&&p.right!=null){
        p=p.right
    }
    if(left!=null){
        p.right=root
        root.left=p
    }
    var right = covert2(root.right)
    if(right){
        right.left=root
        root.right=right
    }
    return left !==null ? left : root
}
