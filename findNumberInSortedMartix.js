function findNumberInSortedMatrix(matrix,num) {
    var row = 0
    var col = matrix[0].length - 1
    while (row < matrix.length && col > -1) {
        if (matrix[row][col] == num) {
            return true;
        } else if (matrix[row][col] > num) {
            col--;
        } else {
            row++;
        }
        console.log(row,col)
    }
    return false;
}

function main() {
    var test = [
        [1, 2, 5],
        [3, 6, 7],
        [4, 8, 9]
    ];
    var result = findNumberInSortedMatrix(test, 6)
    console.log(result)
}
main()