/**
 * 
 * 链接：https://www.nowcoder.net/questionTerminal/59ac416b4b944300b617d4f7f111b215
来源：牛客网

public class Solution {
    public int Add(int num1,int num2) {
        while (num2!=0) {
            int temp = num1^num2;
            num2 = (num1&num2)<<1;
            num1 = temp;
        }
        return num1;
    }
}

 * 
 * 
 */
function noOpreate(num1,num2){
    while(num2!=0){
        var sum= num1^num2 //算不进位的部分  因为形式就是比如 00 11 时候为0 10 01时候是1 
        num2=(num1&num2)<<1//计算进位的部分 01 10 00无法产生进位，只有在11时候的产生进位。进位就是前面加1，相当于左移一位，扩大。当不能进位的时候循环停止，
        num1=sum
    }
    return  num1
    
}
console.log(noOpreate(5,7));
