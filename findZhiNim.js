function isZhi(num){
    if(num==1){
        return false
    }
    if(num==2){
        return true
    }
    for (let i= 0; i< Math.sqrt(num); i++) {
            if(num%i==0){
                return false
            }
            return true
    }
}
var zhiArr=[]
for(var j =1;j<1000;j++){
    if(isZhi(j)){
        zhiArr.push(j)
    }
}
console.log(zhiArr)