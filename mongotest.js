// // var username="lrp"
// // var timeStamp = Date.parse(new Date())
// // var jsonData  = {"loginName":username,"loginTime":timeStamp}
// // var db        = connect("mine")
// // db.mine.insert(jsonData)
// // print('is ok ')
// // var startTime = (new Date()).getTime()
// // var db        = connect("mine")
// // for(var i =0; i<1000;i++){
// //     db.mine.insert({num:i})
// // }
// // var runTime = (new Date()).getTime()
// // print('the run time is '+runTime+"ms")
// var start      = (new Date()).getTime()
// var insertData = []
// for(var i =0; i<1000;i++){
//     insertData.push({num:i})
// }
// var db = connect("mine")
// db.mine.insert(insertData)
// var end = (new Date()).getTime()
// print ('the time is '+(end-start)+"ms")
// var workmate1={
//     name : 'xiaohong',
//     age  : 1,
//     work : "fe",
//     skill: {
//         skillMain:{
//             first : "html",
//             second: "css",
//             third : "js"
//         }
//     }
// }

// var workmate2={
//     name : 'xiaoming',
//     age  : 2,
//     work : "backend",
//     skill: {
//         skillMain:{
//             first : "java",
//             second: "php",
//             third : "node"
//         }
//     }
// }
// var workmate3={
//     name : 'xiaoli',
//     age  : 3,
//     work : "ui",
//     skill: {
//         skillMain:{
//             first : "ptt",
//             second: "photoShop",
//             third : "ue"
//         }
//     }
// }
// var insertData = [workmate1,workmate2,workmate3]
var db = connect('mine')
// db.mine.login.insert(insertData)
// db.mine.login.update({name:'xiaoli'},{$set:{age:11}})
// db.mine.login.update({name:'xiaoming'},{$set:{"skill.skillMain.first":"java9"}})
// db.mine.login.update({name:'xiaoli'},{$set:{"skill.skillMain.first":"ppt2017"}})
// db.mine.login.update({name:"xiaohong"},{$set:{"skill.skillMain.first":"html5"}})
// db.mine.login.update({name:"xiaohong"},{$set:{name:"xiaohong2"}})
// db.mine.login.update({name:"xiaohong2"},{$set:{cool:true}})
// db.mine.login.update({name:"xiaohong2"},{$inc:{age:-2}})
// db.mine.login.update({},{$set:{now:true}},{multi:true})
// db.mine.login.update({name:'xiaohong2'},{$unset:{now:""}})
// db.mine.login.update({name:"xiaoguang"},{$set:{age:11}},{upsert:true})
/*
update: $set 更新数据   db.xxx.update({xxx:xxx},{$set:{xxx:xxx}})
        $unset 删除数据 db.xxx.update({xx:xx},{$unset:{xxx:xxx}})
        multi 多项同时编辑 db.xxx.update({},{xx:xxx},{multi:true})
        upsert找不到值的时候直接插入数据 db.xxx.update({xx:xx},{xx:xxx},{upsert:true})
        upsert: true  没有就添加false代表 没有不添加
*/
// db.mine.login.update({name:"xiaoguang"},{$set:{"skill.skillMain":{first:"fe"}}},{upsert:true})
// db.mine.login.update({name:"xiaohong2"},{$push:{"skill.skillMain.figth":"ruby"}})
// db.mine.login.update({name:"xiaoguang"},{$addToset:{"now":{hi:"i am oa"}}})
// db.mine.login.update({name:"xiaoguang"},{$addToSet:{hoby:{$each:hoby}}})
// db.mine.login.update({name:"xiaoguang"},{$pop:{hoby:1}})
var hoby = ["swim2","play game2","code2"]
db.mine.login.update({name:"xiaoguang"},{$set:{"hoby.2":"code2"}})
print('insert is ok ')