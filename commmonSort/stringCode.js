// 给定一个字符串，请你将字符串重新编码，将连续的字符替换成“连续出现的个数+字符”。比如字符串AAAABCCDAA会被编码成4A1B2C1D2A。 
// 输入描述:
// 每个测试输入包含1个测试用例
// 每个测试用例输入只有一行字符串，字符串只包括大写英文字母，长度不超过10000。


// 输出描述:
// 输出编码后的字符串

// 输入例子1:
// AAAABCCDAA

// 输出例子1:
// 4A1B2C1D2A
function stringCode(str){
    if(str.length>0){
        var arr= str.split('');
        var map ={};
        var result=[];
        for (let i = 0; i< arr.length; i++) {
            if(map[arr[i]]){
                map[arr[i]]++
            }else{
                map[arr[i]]=1
            }
        }
        for(key in map){
            var temp=key+map[key]+""
            result.push(temp)
        }
        return result.join('') 
    }
    return
}
console.log(stringCode('AAAABBBCCCDD'))