function array2stack(size){
    if(size<0){
        return false
    }
    var index=0
    var arr = new Array(size)
    this.peek=()=>{
        if(arr.length>0){
            return arr[arr.length -1]
        }
    }
    this.push=(obj)=>{
       if(arr.length==size) {
           console.log('is full')
           return false
       }
       arr[index++]=obj
    }
    this.pop=(obj)=>{
        if(arr.length>0){
            return arr[index--]
        }
    }
}
