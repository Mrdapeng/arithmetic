/*

宏观调度 
之字形打印

*/
function print_zhi(martix, row1, col1, row2, col2, fromup) {
  if (fromup) {
    while (row1!=row2+1) {
      console.log(martix[row1++][col1--]);
    }
  } else {
    while (row2!=row11) {
      console.log(martix[row2--][col2++]);
    }
  }
}

function printMartixZigzag(martix) {
  var row1 = 0;
  var col1 = 0;
  var row2 = 0;
  var col2 = 0;
  var endRow = martix.length - 1;
  var endCol = martix[0].length - 1;
  var fromup = false;
  while (row1 != endRow + 1) {
    print_zhi(martix, row1, col1, row2, col2, fromup);
    row1 = col1 == endCol ? row1 + 1 : row1;
    col1 = col1 == endCol ? col1 : col1 + 1;
    col2 = row2 == endRow ? col2 + 1 : col2;
    row2 = row2 == endRow ? row2 : row2 + 1;
    fromup = !fromup;
  }
}
printMartixZigzag([[1,2,3],[4,5,6],[7,8,9]])