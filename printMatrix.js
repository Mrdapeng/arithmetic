/*
矩阵打印

*/


function print(matrix){
var row1 = 0
var col1 = 0
var row2 = matrix.length-1
var col2 = matrix[0].length-1
while(row1<=row2&&col1<=col2){
    printEdge(matrix,row1++,col1++,row2--,col2--)
}
}
function printEdge(matrix,row1,col1,row2,col2){
    if(row1==row2){
        for(var i = row1;i<col2;i++){
            console.log(matrix[row1][i]+"")
        }
    }else if(col1==col2){
        for(var i =row1;i<row2;i++){
            console.log(matrix[col1][i]+"")
        }
    }else{
            var curR = row1
            var curC = col1
            console.log(row1,col1,row2,col2)
            while(curC!=col2){
                console.log(matrix[row1][curC]+"")
                curC++
            }
            while(curR!=row2){
                console.log(matrix[curR][col2]+"")
                curR++
            }
            while(curC!=col1){
                console.log(matrix[row2][curC]+"")
                curC--
            }
            while(curR!=row1){
                console.log(matrix[curR][col1]+"")
                curR--
            }
    }
    
}
print([[1,2,3],[4,5,6],[7,8,9]])