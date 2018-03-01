//寻找连续数组最大和
/**
 * 
 * public  int FindGreatestSumOfSubArray(int[] array) {
        int res = array[0]; //记录当前所有子数组的和的最大值
        int max=array[0];   //包含array[i]的连续数组最大值
        for (int i = 1; i < array.length; i++) {
            max=Math.max(max+array[i], array[i]);
            res=Math.max(max, res);
        }
        return res;
}

 */
function FindGreatestSumOfSubArray(array) {
  var pre = array[0];//已经算出来的最大的值
  var max = array[0];//包含下一项array[i]的值 
  for (var i = 1; i < array.length; i++) {
    pre = pre > 0 ? pre : 0;
    max = Math.max(max, pre + array[i]);
    pre += array[i];
  }
  return max;
}
