function* flatten(arr) {
  for (let a of arr) {
    return Array.isArray(a) ? yield* flatten(a) : a;
  }
}

const flatten =(arr)=>[...flatten(arr)]
const flatten3=function(arr){
    return [...flatten3(arr)]
}