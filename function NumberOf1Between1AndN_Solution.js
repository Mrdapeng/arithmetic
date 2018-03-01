/**
 * 
 * 1出现的次数类似的还有什么0出现的次数就是看因子5出现的次数
 *求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数
 为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,但是对于后面问题他就没辙了
 。ACMer希望你们帮帮他,并把问题更加普遍化,可以很快的求出任意非负整数区间中1出现的次数。
 
 */
function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    var counts,num;
    counts = 0;
    if(n < 1){
        return 0;
    }
    //检验每一个数
    for(var i = 1;i <= n;i++){
        num = i;
       //num = num%10;
       //当前这个数有几个1
        while(num > 0){
            if(num%10 == 1){
                counts++;
            }
            num = Math.floor(num/10);
        }
    }
    return counts;
}
NumberOf1Between1AndN_Solution(11)
function mine1(num){
    var count = 0
    for (let i = 0; i < num; i++) {
        //判断当前数有几个1
        while(num>0){
            if(num%10==1){
                count++
            }
            num=Math.floor(num/10)
        }
    }
}
function mine5(num){
    var count =0 
    for (let i = 0; i < num; i++) {
        while(num>0){
            if(num%5==0){
                count++
            }
            num=Math.floor(num/5)
        }       
    }
    return count
}
console.log(mine5(5))