function *flatten(arr){
    for(let a of arr){
        return Array.isArray(a) ? yield* flatten(a): a
    }
}
