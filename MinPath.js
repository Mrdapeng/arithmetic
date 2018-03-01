function getMinPath (matrix){
    return processPath(matrix,matrix.length-1,matrix[0].length-1)
}
function processPath(matrix,i,j){
    var reesult= matrix[i][j]
    if(i==0&&j==0){
        return result
    }
    if(i==0&&j!=0){
        return result+processPath(matrix,i,j-1)
    }
    if(i!=0&&j==0){
        return reesult+processPath(matrix,i-1,j)
    }
    return res+Math.min(processPath(matrix,i,j-1),processPath(matrix,i-1,j))
}