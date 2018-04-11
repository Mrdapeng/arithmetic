export const hasClass = function(el=isRequired,name=isRequired){
    return el.classList.contains(name)
}
export const toggleClass= function(el=isRequired,name=isRequired){
    return el.classList.toggleClass(name)
}
export const deleteClass=function(el=isRequired,name=isRequired){
    return el.classList.remove(name)
}
export const addClass= function(el=isRequired,name=isRequired){
    return el.classList.add(name)
}
var isRequired = (function(){
    throw Error()
})()