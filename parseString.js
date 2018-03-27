/**
 *   完成一个 extractStr 函数，可以把一个字符串中所有的 : 到 . 的子串解析出来并且存放到一个数组当中，例如：
 *   extractStr('My name is:Jerry. My age is:12.') // => ['Jerry', '12']
 *   注意，: 和 . 之间不包含 : 和 .。也即是说，如果 ::abc..，则返回 ['abc']。
 */
const parseString =(str)=>{
    var result = []
    var temp =str.split('.').slice(0,-1)
    temp.forEach(element => {
        var postion = element.lastIndexOf(':')
        if(postion>0){
            result.push(element.substring(postion+1))
        }
    });
    return result
}