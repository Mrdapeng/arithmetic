/**
 * 
 * 输入一颗二叉树和一个整数，
 * 打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。

 * 
 * 
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
public class Solution {
    private ArrayList<ArrayList<Integer>> listAll = new ArrayList<ArrayList<Integer>>();
    private ArrayList<Integer> list = new ArrayList<Integer>();
    public ArrayList<ArrayList<Integer>> FindPath(TreeNode root,int target) {
        if(root == null) return listAll;
        list.add(root.val);
        target -= root.val;
        if(target == 0 && root.left == null && root.right == null)
            listAll.add(new ArrayList<Integer>(list));
        FindPath(root.left, target);
        FindPath(root.right, target);
        list.remove(list.size()-1);
        return listAll;
    }
}
var path;
var stack;
function FindPath(root, expectNumber)
{
    // write code here
    if(root == null){
        return [];
    }
    path= [];
    stack = [];
    cal(root,expectNumber);
    return path;
     
}
 
function cal(root,expectNumber){
    stack.push(root.val);
    if(root.val == expectNumber && root.left==null && root.right==null){
        path.push(stack.slice());
    }
    else{
        if(root.left!=null){
            cal(root.left,expectNumber-root.val);
        }
        if(root.right!=null){
            cal(root.right,expectNumber-root.val);
        }
    }
    stack.pop();
}
 
module.exports = {
    FindPath : FindPath
};
添加笔记

*/

// function FindPath(root, expectNumber)
// {
//     // write code here
//     var result=[];
//     if(root==null) return result;
//     dfs(root,0,[]);
//     function dfs(root,current,path){
//         current+=root.val;
//         path.push(root.val)
//         if(current==expectNumber && root.left==null && root.right ==null){
//             result.push(path.slice(0))
//         }
//         if(root.left!=null){
//             dfs(root.left,current,path)
//         }
//         if(root.right!=null){
//             dfs(root.right,current,path)
//         }
//         path.pop()
//     }
//     return result;
// }

var stack
var path
function FindPath(root, expectNumber)
{
    // write code here
    if(root==null){
        return []
    }
    stack = []
    path = []
    Find(root,expectNumber)
    return path

}
function Find(root,expectNum){
    stack.push(root.val)
    if(root.val===expectNumber&&root.left===null&&root.right===null){
        path.push(stack.slice())
    }else {
        if(root.left!==null){
            Find(root.left,expectNumber-root.val)
        }
        if(root.right!==null){
            Find(root.right,expectNumber-root.val)
        }
        stack.pop()
    }
}