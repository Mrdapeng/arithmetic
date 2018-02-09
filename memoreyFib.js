/**
 *记忆化fib  防止超时，减少不必要的计算
 *const fibonacci = ((memo = [0, 1] => {
    const fib = (n) => {
        let result = memo[n]
        if (typeof result !== 'number') {
            result = fib(n-1) + fib(n-2)
            memo[n] = result
        }
        return result
    }
})()
 */
const fibonacci =((memory =[0,1])=>{
    const fib =(n)=>{
        let result = memory[n]
        if(typeof result !== 'number'){
            reult = fib(n-1)+fib(n-2)
            memory[n]= result
        }
        return result
    }
})