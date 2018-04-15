 function randomStr(n){
    let str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var i = 0;   
    var result=[]
    while(i<n){
        var randIdx= Math.floor(Math.random()*(36))
        result.push(str[randIdx])
        i++
    }
    return result.join('')
}
console.log(randomStr(10));