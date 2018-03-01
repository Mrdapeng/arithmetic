function commafy(num){
    var temp= num.split('.')
    var zheng=temp[0]
    var tempZheng= temp[0].split('')
    var tempZhengStr=''
    while(tempZheng.length>0){
        tempZhengStr+=tempZheng.pop()
        tempZhengStr+=tempZheng.pop()
        tempZhengStr+=tempZheng.pop()
    }
}
function commafy2(){
    return Number(num).toLocaleString();
}