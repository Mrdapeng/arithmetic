function didoedBy2(decNumber){
    var stack =[];
    var rem;
    while(decNumber>0){
        rem=Math.floor(decNumber%2)
        stack.push(rem)
        decNumber=Math.floor(decNumber/2)
    }
    while(stack.length!=0){
        return stack.pop()+""
    }
}
console.log(decNumber(10))