// function Father(firstName){
//     this.firstName=firstName
// }
// Father.prototype.say=function(){
//     console.log(this.firstName)
// }
// function Son(name,play){
//     Father.call(this,name)
//     this.play=play
// }
// Son.prototype=new Father()

// var son  =  new Son('zhang','ps4')
// console.log(son.constructor)
// console.log(son instanceof Father);
// console.log(Father.prototype.isPrototypeOf(son))

function obj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

var person = {
  name: "ha",
  friends: ["fenng", "yu", "lei", "dian"]
};
console.log(person.friends);
var anotherPerson = obj(person);
anotherPerson.friends.push("ano");
console.log(anotherPerson.friends);
var yetPerson = obj(person);
yetPerson.friends.push("yet");
console.log(yetPerson.friends);
var world = Object.create(person, {
  name: {
    value: "bianbianbian"
  }
});
console.log(world.name);
function inherit(subType, superType) {
  //父类原型对象的浅拷贝
  var _prototype = obj(superType.prototype);
  //原型对象的增强，让constructot 指向正常
  _prototype.constructor = subType;
  subType.prototype = _prototype; //父类原型的浅拷贝
}

function Father2(firstName) {
  this.firstName = "Fa";
}
Father2.prototype.say = function() {
  console.log(this.firstName);
};

function Son2(play) {
  Father2.call(this);
  this.play = play;
}
inherit(Son2, Father2);
Son2.prototype.sayPlay=function(){
    console.log('i am play'+this.play)
}
var son2 = new Son2('ps4')
console.log(son2.say())
console.log(son2.sayPlay())

function shallowProtoTypeCopy(o){
    function F(){}
    F.prototype=o
    return new F()
}

function inheritPrototype(_sub,_super){
    var prototype = shallowCopy(_super.prototype)
    prototype.constructor=_sub
    _sub.prototype=prototype
}