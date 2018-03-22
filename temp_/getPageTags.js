const getPageTags =()=>{
    return [...new Set[document.getElementsByTagName('*').map((value)=>{value.nodeName})]]
   
}