/**
 * 买帽子第三小
 * 数组去重,取第三小
 * 
 */
function buyHat(priceArr){
        var priceSet = new Set(priceArr)
        var temp = Array.from(priceSet).sort((a,b)=>{a-b})
        return temp[2]
}
console.log(buyHat([10,10,10,20,30,30,40]))