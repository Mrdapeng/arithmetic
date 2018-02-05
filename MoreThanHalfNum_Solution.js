function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    var res = []
    var max = Math.max(...numbers)
    var mid = (numbers.length/2).toFixed(10)
    for(let i = 0 ; i<max+1; i++){
        res.push(0)
    }
    for(let i= 0;i<numbers.length;i++){
            res[numbers[i]]++
    }
    var result = null
    for(let i = 0;i<res.length;i++){
        if(res[i]>mid){
            result = i
        }
    }
    if(result){
        return result
    }else{
        return 0
    }
}
console.log(MoreThanHalfNum_Solution([1,2,3,2,2,2,5,4,2]));
