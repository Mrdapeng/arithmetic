function observe(value){
    if(!value||(typeof value!=='object')){
        return 
    }
    Object.keys(value).forEach(ele=>{
        deineReactive(value,key,value[key])
    })
}
function cb(val){
    console.log('view is updated',val)
}
function deineReactive(obj,key,val){
    Object.defineProperties(obj,key,{
        enumerable:true,
        configurable:true,
        get:function reactiveGetter(){
            return val
        },
        set:function reactiveSetter(newval){
            if(newval ===val){return }
            cb(newval)
        }
    })
}
class Vue{
    constructor(opitio
        this._data=opition.data
        observe(this._data)
    }
}
let o = new Vue({
    data:{
        test:'i am test'
    }
})
o._data.test='hello ,test'