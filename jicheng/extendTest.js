function Animal(name){
    this.name=name
}
Animal.prototype.iam='i am a Animal'
Animal.prototype.shout=function(){
    console.log(this.name+"is shout")
}
function Cat(name){
    Animal.call(this,name)
}
// Cat.prototype= new Animal()
var cat1 = new Cat('miaomiao')
console.log(cat1.name)