var p = new Promise((reslove,rejcect)=>{
    throw (new Error('hhh'))
})
p.then(()=>{

},()=>{

}).then(()=>{
    console.log('i am saved')
},()=>{
    console.log('haha')
})
// var p2 = function(){
//     return new Promise((reslove,reject)=>{
//         reject('i am wrong')
//     })
// }
// p2().then(()=>{
//     console.log('i am ok')
// },()=>{
//     console.log('i receive a wrong')
//     return Promise.reject(' i am wrong again ')
// }).then(()=>{
//     console.log('i am save')
// },()=>{
//     console.log('i am save wrong')
// })