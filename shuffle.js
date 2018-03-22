function shuffle(arr) {
  arr.forEach((element, index) => {
    var randomIndex = Math.floor(Math.random() * (index + 1));
    swap(arr, index, randomIndex);
  });
}
function swap(arr,i,j){
    [arr[j],arr[i]]=[arr[i],arr[j]]
}
const _swap = (arr,i,j)=>{
    [arr[i],arr[j]]=[arr[j],arr[i]]
}

const _shuffle=(arr)=>{
    arr.forEach((element,index)=>{
        var randomIndex = Math.floor(Math.random()*(index+1))
        swap(arr,index,randomIndex)
    })
    
}