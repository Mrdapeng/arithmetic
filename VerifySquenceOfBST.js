/**
 * 
 * @param {*} sequence 
 * 问题描述：
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

 */
function VerifySquenceOfBST(sequence)
{
    // write code here
    var n = sequence.length;
    var i = 0;
    if(n == 0) return false;
    while(--n){
        while(sequence[i] < sequence[n]) i++;
        while(sequence[i] > sequence[n]) i++;
        if(i < n) return false;
        i = 0;
    }
    return true;
}
