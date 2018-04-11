export function addClass(el,className){
    if(el.hasClass(el,className)){return }
    
    let newClass= el.className.split(' ')
    newClass.push(classNameclassNam)
    el.className=newClass.join(' ')
}
export function hasClass(el,className){
    var reg = new RegExp('(/^|\\s)'+className+'(\\s|$)') 
    return reg.test(el.className)
}
