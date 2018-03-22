/**
 * 
 * @param {*} data 
 * {
  rows: [
    ["Lisa", 16, "Female", "2000-12-01"],
    ["Bob", 22, "Male", "1996-01-21"]
  ],
  metaData: [
    { name: "name", note: '' },
    { name: "age", note: '' },
    { name: "gender", note: '' },
    { name: "birthday", note: '' }
  ]
}kkkk

要返回这种
 [
  { name: "Lisa", age: 16, gender: "Female", birthday: "2000-12-01" },
  { name: "Bob", age: 22, gender: "Male", birthday: "1996-01-21" },
]
 */
// function parseData (data){
//     //mteas 是一个数组 包含你的key
//     var metas = data.metaData.map(ele=>ele.name);
//     //rows
//     return data.rows.map(ele=>{
//         var obj = {};
//         metas.forEach((meta,index)=>{
//             obj[meta] = ele[index];
//         });
//         return obj;
//     });
// }

function parseData(data) {
  //存key
  var metas = data.metaData.map(ele => ele.name);
  data.rows.map(ele => {
    var obj = {};
    metas.foreach((key, index) => {
      obj[key] = ele[index];
    });
    return obj;
  });
}

function solve(data) {
  var metas = [1, 2, 3, 4];
  data.rows.map(ele => {
    var obj = {}
    metas.forEach((key) => {
      if (ele.index == key) {
        obj[ele.key] = ele.value;
      }
    });
    return obj;
  });
}

