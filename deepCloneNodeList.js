function deepClone(phead){
    if(phead==null){
        return null
    }
    var newHead= new Node(phead.val)
    newHead.next=deepClone(newHead.next)
    newHead.random=phead.random
    return newHead
}