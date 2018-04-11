var stack1 = []
var stack2 =[]

function push(item){
    stack1.pus(item)
}

function pop(){
    if(stack1.length===0&&stack2.length===0) return 

    if(stack2.length===0){
        while(stack1.length){
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop()
}