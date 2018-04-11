function uniqueStr(str){
    var word=''
    var num=''
    var arr=str.split('')

    arr.forEach(element => {
        if(/[0-9]/g.test(element)){
            num+=element
        }else if(/[a-zA-Z]/g.test(element)){
            word+=element
        }
    });
    return [...new Set(num.split(''))].join('')+word
}
console.log(uniqueStr('携程C2t0r1i8p2020校招'));
