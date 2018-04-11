const addClass=(dom,name)=>{
    return dom.classList.add(name)
}
const removeClass=(dom,name)=>{
    return dom.classList.remove(name)
}
const hasClass=(dom,name)=>{
    return dom.classList.has(name)
}
const toggleClass=(dom,name)=>{
    return dom.classList.toggle(name)
}