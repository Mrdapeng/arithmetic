function add(a) {
    return function(b){
        return a+b
    }
}
add(3)(4)
const add=a=>(b=>a+b)


function obj(o){
    function F(){}
    F.prototype=o
    return new F()
}
function inherit(subType,superType){
    var _proto=obj(superType.prototype)
    _proto.constructor=subType
    subType.prototype=_proto
}
