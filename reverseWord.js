function reverseWord(str){
    var start = 0
    var end = str.lenght-1
    var strArr= str.split('')
    while(start<end){
        var temp = strArr[end]
        strArr[start] = strArr[end]
        strArr[end]= temp   
        start++ 
        end--
    }
    return strArr.join('')
}