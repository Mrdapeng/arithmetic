function HasSubTree(tree1,tree2){
if(!tree1||!tree2){
    return false
}
return 
}
function isSubTree(root1,root2){
    if(!root2){
        return true
    }
    if(!root1){
        return false
    }
    if(root1.val===root2.val){
        return isSubTree(root1.left,root2.left)&&isSubTree(root1.right,root2.right)
    }else{
        return false
    }


}