console.time('hhhh')
function fibNum(n){
    if(n==1){
        return 1 
    }else{
        return n*fibNum(n-1)
    }
}
fibNum(10000)
console.timeEnd()
var foo={
    a:1,
    say:function(){
        console.log(this.a)
    }
}
var bar = foo
bar.say()

foo.say()
bar=foo.say
bar()