//最大公约数
function  big(a,b) {
    if(b==0){
        return a
    }
    return big(b,a%b)
}
console.log(big(18,15));