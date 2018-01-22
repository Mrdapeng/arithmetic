function linkedList(){
    var Node =function(){
        this.element=element
        this.next=null
    }
    var length=0
    var head =null
    //链表插入一项,
    //列表最后一项就是null
    this.append=function(element){
        var node = new Node(element),current
        if(head===null){
            head=node
        }else{
            current=head
            while(current.next){
                current=current.next
            }
            current.next=node
        }
        length ++
    },
    this.insert=function(position,element){
    },
    this.removeAt=function(){

    },
    this.indexOf=function(){

    }
    this.isEmpty=function(){

    }
    this.size=function(){

    }
    this.getHead=function(){

    }
    this.toString=function(){

    }
    this.print=function(){}
}