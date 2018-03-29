
// if(!("a" in window)){
//     var a = 10;
//     console.log('hhh')
// }
// function quickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     var privotInex= Math.floor(arr.length/2)
//     var privot = arr.splice(privotInex,1)[0]
//     var left=[]
//     var right =[]
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]<privot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return quickSort(left).concat(arr[privotInex],quickSort(right))
// }
class Father{
    constructor(name){
        this.name
    }
    static sayName(){
        console.log(this.play)
    }
}
Father.sayName()