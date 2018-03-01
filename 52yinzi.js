/**
 * 
 * @param {*} num 
 * 主要是看5的因子有多少个
 */
function _52yiniz(num){
    var count= 0
    if(num<0){
        return
    }else{
        while(num){
            count+=num/5
            num=num/5
        }
    }
    return  parseInt(count)
}
function _52yiniz2(num){
    var count= 0
    for(let i=0;i<=num;i+=5){
        let now = i
        while(i%5==0){
            count++
            now/=5
        }
    }
    return count
}
console.log(_52yiniz(10));
