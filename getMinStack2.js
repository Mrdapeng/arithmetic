var minStack=[]
var stack =[]
function push(item){
    stack.push(item)
    if(minStack.length=0){
        minStack.push(item)
    }
    if(item<peek(minStack)){
        minStack.push(item)
    }else{
        minStack.push(minStack[minStack.length-1])
    }
}
function getMin(){
    return minStack.peek()
}
function pop(){
    if(stack.length==0||minStack.length==0){
        console.log('is empty')
    }
    stack.pop()
    minStack.pop()
}
function peek(stack){
    return stack[stack.length-1]
}