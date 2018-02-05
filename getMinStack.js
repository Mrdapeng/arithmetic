/*


class Solution {
public:
     
    stack<int> stack1,stack2;
     
    void push(int value) {
        stack1.push(value);
        if(stack2.empty())
            stack2.push(value);
        else if(value<=stack2.top())
        {
            stack2.push(value);
        }
    }
     
    void pop() {
        if(stack1.top()==stack2.top())
            stack2.pop();
        stack1.pop();
         
    }
     
    int top() {
        return stack1.top();       
    }
     
    int min() {
        return stack2.top();
    }
     
};

*/
var stack = [];
var stackMin = [];
function push(node) {
  stack.push(value);
  if (stackMin.length !== 0 || stackMin[stackMin.length - 1] > value) {
    stackMin.push(value);
  }
}
function pop(node) {
  if (stack.length == 0) {
    return;
  }
  var temp = stack.pop();
  if (stack.pop() === stackMin[stackMin.length - 1]) {
    stackMin.pop();
  }
  return temp;
}
function top(node) {
  if (stack.length !== 0) {
    return stack[stack.length - 1];
  }
}
function min(node) {
  return stackMin.pop();
}
