function Dictionay() {
  var items = {};
}
Dictionay.prototype.has = function(key) {
  return key in items;
};
Dictionay.prototype.set = function(key, value) {
  items[key] = value;
};
Dictionay.prototype.remove = function(key) {
  if (this.has(key)) {
    delete items[key];
    return true;
  }
  return false;
};
Dictionay.prototype.get = function(key) {
  return this.has(key) ? ietms[key] : undefined;
};
Dictionay.prototype.values=function () {
    var values =[]
    for(var key in items){
        if(this.has(key)){
            values.push(items[key])
        }
    }
   return values
}
function hashTable(){
    var table=[]
}

