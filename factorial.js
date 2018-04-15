function factorial(n){
    if(n===1){return 1}
    return factorial(n-1)*n
}

//尾调用优化版

function factorial2(n,total){
    if(n==1){return total }
    return n*factorial2(n-1,n*total)
}


function fib2(n){
    var store=[1,1]
    if(n==1||n==2)return 1
    for(var i=2;i<n;i++){
        store[i]=store[i-1]=store[i-2]
    }
    return store[n-1]
}

