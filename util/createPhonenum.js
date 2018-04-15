function  createPhoneNum(numbers) {
    var format = 'xxx-xxxxx'
    for(var i =0;i<numbers.length;i++){
        
        format=format.replace('x',numbers[i])
    }
    return format
}
console.log(createPhoneNum('12345678'));