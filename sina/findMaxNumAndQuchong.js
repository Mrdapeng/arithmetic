function solve(obj){
    var o={}
    for(var key in obj){
        let {city,price}=obj[key]
        if(o[price]){
            o[price]++
        }else{
            o[price]=1
        }
    }
    var arr=[]
    for(var key in o){
        arr.push(o[key])
    }
    var max = Math.max([...arr])
    for(var key in obj){
        if(obj[key].price===max){
            delete obj[key]
        }
    }
}