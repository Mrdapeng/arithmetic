function isPrime(n){

    if(n===1) return false
    if(n===2) return false
    var len = Math.pow(n,1/2)
    for(let i = 2;i<len;i++){
        if(n%i===0){
            return false
        }
        return true
    }
}