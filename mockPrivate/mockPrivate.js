function counter(start) {
    var count = start
    return {
        increment: function () {
            count++
        },
        get: function () {
            return count
        }
    }
}
var countInstance = counter(0)
countInstance.increment()
console.log(countInstance.get());
countInstance.increment()
console.log(countInstance.get());

var jiajia = (function () {
    var count = 0;
    return function () {
        return count++
    }
})()

console.log(jiajia())
console.log(jiajia())


for (var i = 0; i < 5; i++) {
    setTimeout((
        function () {
            return function (i) {
                console.log(i)
            }
        }
    )(i), i * 1000)
}