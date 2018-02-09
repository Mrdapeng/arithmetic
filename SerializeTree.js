/*

序列化二叉树
时间限制：1秒 空间限制：32768K 热度指数：60278
 算法知识视频讲解
题目描述
请实现两个函数，分别用来序列化和反序列化二叉树
JavaScript (V8 6.0.0)
 function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 
function TreeNode({
    this.val = x;
    this.left = null;
    this.right = null;
}
var arr = [];
function Serialize(pRoot)
{
    // write code here
    if(pRoot==null){
        arr.push('a');
    }else{
        arr.push(pRoot.val);
        Serialize(pRoot.left);
        Serialize(pRoot.right);
    }
        
}
function Deserialize(s)
{
    // write code here
    var node = null;
    if(arr.length<1){
        return null;
    }
    var number = arr.shift();
    if(typeof number == 'number'){
        node = new TreeNode(number);
        node.left = Deserialize(arr);
        node.right = Deserialize(arr);
    }
    return node;
}

*/
var arr = []

function Serialize(pRoot) {
    if (pRoot == null) {
        arr.push("#")
    }
    arr.push(arr.val)
    Serialize(pRoot.left)
    Serialize(pRoot.right)
}

function Deserialize(s) {

    if (s == null) {
        return null
    }
    if (s.length < 1) {
        return null
    }
    var root = null
    var number = arr.shift()
    if (typeof number=='number'){
        root = new TreeNode(number)
        root.left=Deserialize(arr)
        roo.right=Deserialize(arr)
    }
}