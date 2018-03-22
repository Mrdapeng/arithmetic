function plus(start) {
  var num = start;
  return {
    increment: function() {
      return num++;
    },
    get: function() {
      return num;
    }
  };
}
var foo = plus(4);
foo.increment();
console.log(foo.get());
foo.increment();
console.log(foo.get());

var plusMine = (function(){
    var num =0 
    return function(){
        return num++
    }
})()
console.log(plusMine())
console.log(plusMine())



var obj =function(){
    function test(){
        console.log(this)
    }
    test()
}
obj()

for(var i =0;i<5;i++){
    (function(i){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    })(i)
}
for(var i = 0; i < 10; i++) {
    setTimeout((function(e) {
        return function() {
            console.log(e);
        }
    })(i), i*1000)
}
for(var i = 0;i<5;i++){
    setTimeout((function(){
        console.log(i)
    })(),i*1000)
}