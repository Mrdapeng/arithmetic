function  isStr(o) {
    return Object.prototype.toString.call(o).slice(8,-1)==='String'
}
function  sovle(start,end,range) {
    var result=[]
        if(isStr(start)&&isStr(end)){
                for(var i =start.charCodeAt();i<=end.charCodeAt();i+=range){
                    result.push(String.fromCharCode(i))
                }
        }else{
            for(var i = start;i<=end;i+=range){
                result.push(i)
            }
        }
        return result
}
console.log(sovle('A','F',2))
console.log(sovle(1,10,3))