function everyfn(child,fn){
    if(!child||!fn){return}
    fn.call(child)
    if(child.children){
        var child=child.children
        for (let i = 0; i <child.length; i++) {
                everyfn(child[i],fn)           
        }
    }
}