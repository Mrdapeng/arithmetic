function listNode(x){
    this.val=x
    this.next= null
}
function merge(pHead1,pHead2){
    if(pHead1===null){
        return pHead2
    }
    if(pHead2===null){
        return pHead1
    }
    var result=null
    if(pHead1.val<pHead2.val){
        result=pHead1
        merge(pHead1.next,pHead2)
    }else {
        result=pHead2
        merge(pHead1,pHead2.next)
    }
    return  result
}