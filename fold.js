/**
 * 
 *折纸问题可以从几个方面分析出是二叉树问题
 首选是数量 2的n次方-1 满二叉树的数量刚好如此 
 * 
 * 
 * 
 */

function printFolds(N) {
    printProcess(1,N,true)
}
function printProcess(i, N, down) {
  if (i > N) {
    return;
  }
  printProcess(i+1,N,true)
  console.log(down?"down":"up")
  printProcess(i+1,N,false)
}

function main(){
    var N=4 
    printFolds(4)
}
main()