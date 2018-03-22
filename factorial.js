function factorial(n){
    if(n===1){return 1}
    return factorial(n-1)*n
}

//尾调用优化版

function factorial2(n,total){
    if(n==1){return total }
    return n*factorial2(n-1,n*total)
}