/**
 *
 *
 * Object.assign是一种浅拷贝
 * 而且还是覆盖式的,并且深度也就一层
 *
 */
var a = {
  name: "xiaoming",
  say: function() {},
  have: [1, 2, 3],

  cool:[
      {
          c:1,
          d:{
              e:1
          }
      }
  ]
};
var b = {
  name: "xiaoli"
};
console.log(Object.assign(b, a));

var foo ={
    bar:{
        la:{
            oh:{
                now:1,
                say:function(){
                    console.log('hhhh')
                }
            }
        }
    }

}
var b  =JSON.parse(JSON.stringify(foo))
console.log(foo);


var val =2 
var copy = val
val =3
console.log(val,copy)


var zhaosi= {
    sex:'male'
}
var wangwu=zhaosi
wangwu.sex='fmale'
console.log(zhaosi.sex,wangwu.sex)

