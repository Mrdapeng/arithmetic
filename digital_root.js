function digital_root(n) {
    let num = n;
    if (num < 10){
        return num
    }else {
        return arguments.callee((num+'').split('').reduce(function (a,b) {
            return parseInt(a) + parseInt(b)
        }))
    }
}
console.log(digital_root(10));
