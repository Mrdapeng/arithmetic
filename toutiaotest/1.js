function sovle() {

    // var n = readline().split(" ")[0]
    // var k = readline().split(" ")[1]
    // var arr = readline().split(" ")
    var temp = []
    var n=4
    var k=0
    var arr=[1,1,1,1,1]
    if (n && k >= 0) {
        for (var i = 0; i < n;i++) {
            for (var j = 0; j < n; j++) {
                if (arr[i] >=arr[j] && arr[i] - arr[j] === k) {
                    temp.push(arr[i] + "" + arr[j])
                }
            }
        }
        console.log(temp)
        return new Set(temp).size
    }else{
        return 0
    }
}

console.log(sovle())