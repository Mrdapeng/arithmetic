function sovle(arr, target) {
    var map = {}
    for (var i = 0; i < arr.length; i++) {
        if(map[arr[i].time]){
            map[arr[i].time].push(arr[i].content)
        }else{
            map[arr[i].time]=[]
            map[arr[i].time].push(arr[i].content)
        }
    }
    console.log(map)
    return map[target]
}
function run(arr, target) {
    return sovle(arr, target).map((item) => {
        return item
    })
}

var arr= [{time: 1, content: 'hhhh'}, {time: '1', content: 'heheheh'}, {time: 2, content: 'aima'}, {
    time: 2,
    content: 'aiyama'
}]
console.log(sovle(arr,1))
