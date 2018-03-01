function node() {
  this.value = value;
  this.left = null;
  this.right = null;
}
function preOrderRecur(head) {
  if (head === null) {
    return null;
  }
  console.log(head.va);
  preOrderRecur(head.value);
  preOrderRecur(head.left);
  preOrderRecur(head.right);
}
function middleOrderRecur(head) {
  if (head === null) {
    return null;
  }
  middleOrderRecur(head.left);
  console.log(head.value);
  middleOrderRecur(head.right);
}
function lastOrderRecur() {
  if (head === null) {
    return null;
  }
  lastOrderRecur(head.left);
  lastOrderRecur(head.right);
  console.log(head.value);
}

function preOrder(head) {
  console.log("preOrder");
  if (head != null) {
    var stack = [];
    stack.push(head);
    while (stack.length > 0) {
      var head = stack.pop();
      console.log(head.value);
    }
    if (head.left != null) {
      stack.push(head.right);
    }
    if (head.right != null) {
      stack.push(head.left);
    }
  }
  console.log("\r\n");
}
function middleOrder(head) {
  console.log("middleOrder");
  if (head != null) {
    var stack = [];
    while (stack.length > 0 || head != null) {
      if (head != null) {
        stack.push(head);
        head = head.left;
      } else {
        head = head.pop();
        console.log(head.value);
        head = head.right;
      }
    }
    console.log("\r\n");
  }
}
function lastOrder(head){
    console.log('lastOrder');
   if (head!=null) {
       var stack1 = []
       var stack2 = []
        stack1.push(head)       
        while(stack1.length>0){
            head=stack1.pop()
            stack2.push(head)
            if(head.left!=null){
                stack1.push(head.left)
            }
            if (stack2.length>0) {
                stack1.push(head.right)
            }
        }
        while(stack2.length>0){
            console.log(stack2.pop().value)
        }
        console.log('\r\n')
   } 
} 
