function binarySerachgTree(params) {
    var Node= function (key) {
        this.key=key
        this.left=null
        this.right=null
    }
    var root = null 
    this.insert=function (key) {
        var newNode = new Node(key)
        if(root===null){
            root = newNode
        }else{
            insertNode(root,newNode)
        }
    }
    this.insertNode=function (node,newNode) {
        if(newNode.key<root.key){
            if(root.left===null){
                root.left=newNode
            }else{
                insertNode(root.left,newNode)
            }
        }else{
            if(root.right==null){
                root.right=newNode
            }else{
                insertNode(root.right,newNode)
            }
        }
    }
    this.inorderTrace=function (callBack) {
        this.inorderTraceNode(node,callBack)
    }
    this.inorderTraceNode=function (node,callBack) {
        if(node!==null){
            inorderTraceNode(node.left,callBack)
            callBack(node.ley)
            inorderTraceNode(node.right,callBack)
        }    
    }
    this.preOrderTrace=function (callBack) {
        this.preOrderTraceNode(node,callBack)
    }
    this.preOrderTraceNode=function (node,callBack) {
        if(node!==null){
            callBack(node.key)
            preOrderTraceNode(node.left,callBack)
            preOrderTraceNode(node.right,callBack)
        }
    }
    this.getMin=function (node) {
        if(node){
            while(node&&node.left!==null){
                node=node.left
            }
        }
        return null
    }
    this.getMax=function (node) {
        if(node){
            while(node&&node.right!==null){
                node=node.right
            }
            return node.right           
        }
        return  null
    }
        this.print= function (node) {
        console.log("node.key===",node.key)
   }
   this.search=function (key) {
       return searchNode(root,key)
   }
   this.searchNode=function (node,key) {
       if(node===null){
           return 
       }
       if(key>node.key){
           return searchNode(node.left,key)
       }else if(key>node.key){
           return searchNode(node.right,key)
       }
   }
   this.remove=function(key){
        return removeNode(root,key)
   }
   this.removeNode=function(node,key){
        if(node===null){
            return null
        }
        if(key<node.key){
            node.left=removeNode(node.left,key)
            return node
        }else if(key>node.key){
            node.right= removeNode(node.right,key)
            return node 
        }else{
            if(node.right===null&& node.right===null){
                node=null
                return node
            }
            if(node.left===null){
                node=node.right
                return node
            }else if (node.right===null){
                node=node.left
                return node
            }
            var aux = this.getMin(node.right)
            node.key=aux.key
            node.right=r
            
        }
   }
}


