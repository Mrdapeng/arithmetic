function PrintMaxNumber(numbers){
    numbers.sort((a,b)=>{
        return ([b,a].join('')-[a,b].join(''))
    })
    return numbers.join('')
}
console.log(PrintMaxNumber([5,2,1,380,381]))
var xhr =new XMLHttpRequest()
xhr.open('GET','api/xxx')
xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status===200){
        console.log(xhr.responseText)
    }
}
xhr.send(null)

Function.prototype._bind=function(){
    var self= this
    var args= [].shift.call(arguments)
    var context = [].slice.call(this.arguments)
    return function(){
        self.apply(context,[].concat(args,[].slice.call(arguments)))
    }
}
function obj (o){
    function F(){}
    F.prototype=o
    return new F()
}
function inherit(superType,subType){
    var _proto=obj(superType.prototype)
    _proto.constructor=superType
    subType.prototype=_proto
}