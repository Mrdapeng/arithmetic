// function lengthOfLongestSubstring(s) {
//     const map = {};
//     var left = 0;
    
//     return s.split('').reduce((max, v, i) => {
//         left = map[v] >= left ? map[v] + 1 : left;
//         map[v] = i;
//         return Math.max(max, i - left + 1);
//     }, 0);
// }
function lengthOfLongestSubstring(s){
    const map={}
    var left =0 
    return s.split('').reduce((max,cur,curIndex)=>{
        left =map[cur] >= left ? map[cur]+1 :left
        console.log('left',left)
        console.log('prev',map)
        map[cur]=curIndex
        console.log('next',map)
        return Math.max(max,curIndex-left+1)
    },0)
}