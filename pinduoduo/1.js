//前端生成随机验证码
const randomStr=(n)=>{
    var key = []
    var smallWord=new Array('z'.charCodeAt()-'a'.charCodeAt()+1).fill().map((item,i)=>{return String.fromCharCode(i+97)});
    var bigWord=new Array('Z'.charCodeAt()-'A'.charCodeAt()+1).fill().map((item,i)=>{return String.fromCharCode(i+65)});
    var number=new Array(10).fill().map((item,i)=>{return i+''});
    var coma=['=','+']
    var result='';
    key=[...bigWord,...smallWord,...number,...coma];
    var keyLen=key.length
    for(var i = 0;i<n;i++){
        var randomIndex=Math.floor(Math.random()*(keyLen))
        console.log(randomIndex)
        result+=key[randomIndex]
    }
    return result
}
console.log(randomStr(10))
