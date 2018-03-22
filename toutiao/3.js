// var defaults = {
//     id: '',
//     x: 0,
//     y: 0,
//     width: 20,
//     height: 20,
//     styles: {
//         color: '#ffffff',
//         background_color: '#333333'
//     },
//     points: [0, 1],
//     now: [4, 5, 6]
// }
//
// var newObject = {
//     id: '1', // changed
//     x: 10, // changed
//     y: 10, // changed
//     width: 20,
//     height: 20,
//     styles: {
//         color: '#ffffff',
//         background_color: '#000000' // changed
//     },
//     points: [0, 1, 2, 3]
//     // cool:['code','swim','running']
// }
//
// var subtracted = {
//     id: '1',
//     x: 10,
//     y: 10,
//     styles: {
//         background_color: '#333333'
//     }
// }
//
// // function isSame(a, b) {
// //     if (a.length != b.length) return false;
// //     if (a.filter(function (i) {
// //             return a.indexOf(i) < 0;
// //         }).length > 0)
// //         return false;
// //     if (b.filter(function (i) {
// //             return a.indexOf(i) < 0;
// //         }).length > 0)
// //         return false;
// //     return true;
// // };
// function isSame(a, b) {
//     return JSON.stringify(a) === JSON.stringify(b)
// }
//
// function subtract(a, b) {
//     var r = {};
//
//     // For each property of 'b'
//     // if it's different than the corresponding property of 'a'
//     // place it in 'r'
//     for (var key in b) {
//         if (Array.isArray(b[key])) {
//             if (!a[key]) a[key] = [];
//             if (!isSame(a[key], b[key]))
//                 r[key] = a[key];
//         } else if (typeof(b[key]) === 'object') {
//             if (!a[key]) a[key] = {};
//             r[key] = subtract(a[key], b[key]);
//         } else {
//             if (b[key] !== a[key]) {
//                 r[key] = a[key];
//             }
//         }
//     }
//     return r;
// }
//
// // function solve(a, b) {
// //     var r = {}
// //     for (var key in b) {
// //         if (Array.isArray(b[key])) {
// //             if (!a[key]) a[key] = []
// //             if (!JSON.stringify(a[key]) === JSON.stringify(b[key])) {
// //                 r[key] = a[key]
// //             } else if (typeof  b[key] === 'object') {
// //                 if (!a[key]) {
// //                     a[key] = {}
// //                     r[key] = subtract(a[key], b[key])
// //                 }
// //             }else  {
// //                 if(b[key]!=a[key]){
// //                     r[key]=a[key]
// //                 }
// //             }
// //         }
// //     }
// // }
//
// console.log(subtract(newObject, defaults));
//
// function solve(oA, oB) {
//     var o = {}
//     for (var key in oB) {
//         if (Array.isArray(oB[key])) {
//             if (!oA[key]) {
//                 o[key] = []
//             }
//             if (JSON.stringify(oA[key] !== oB[key])) {
//                 o[key] = oA[key]
//             } else if (typeof  oB[key] === 'object') {
//                 if (!oA[key]) o[key] = {}
//                 o[key] = solve(oA[key], oB[key])
//             } else {
//                 if (oB[key] !== oA[key]) {
//                     o[key] = oA[key]
//                 }
//             }
//         }
//     }
//     return o
// }
// console.log(solve(newObject, defaults));
var deepDiffMapper = function() {
    return {
        VALUE_CREATED: 'created',
        VALUE_UPDATED: 'updated',
        VALUE_DELETED: 'deleted',
        VALUE_UNCHANGED: 'unchanged',
        map: function(obj1, obj2) {
            if (this.isFunction(obj1) || this.isFunction(obj2)) {
                throw 'Invalid argument. Function given, object expected.';
            }
            if (this.isValue(obj1) || this.isValue(obj2)) {
                return {
                    type: this.compareValues(obj1, obj2),
                    data: (obj1 === undefined) ? obj2 : obj1
                };
            }

            var diff = {};
            for (var key in obj1) {
                if (this.isFunction(obj1[key])) {
                    continue;
                }

                var value2 = undefined;
                if ('undefined' != typeof(obj2[key])) {
                    value2 = obj2[key];
                }

                diff[key] = this.map(obj1[key], value2);
            }
            for (var key in obj2) {
                if (this.isFunction(obj2[key]) || ('undefined' != typeof(diff[key]))) {
                    continue;
                }

                diff[key] = this.map(undefined, obj2[key]);
            }

            return diff;

        },
        compareValues: function(value1, value2) {
            if (value1 === value2) {
                return this.VALUE_UNCHANGED;
            }
            if (this.isDate(value1) && this.isDate(value2) && value1.getTime() === value2.getTime()) {
                return this.VALUE_UNCHANGED;
            }
            if ('undefined' == typeof(value1)) {
                return this.VALUE_CREATED;
            }
            if ('undefined' == typeof(value2)) {
                return this.VALUE_DELETED;
            }

            return this.VALUE_UPDATED;
        },
        isFunction: function(obj) {
            return {}.toString.apply(obj) === '[object Function]';
        },
        isArray: function(obj) {
            return {}.toString.apply(obj) === '[object Array]';
        },
        isDate: function(obj) {
            return {}.toString.apply(obj) === '[object Date]';
        },
        isObject: function(obj) {
            return {}.toString.apply(obj) === '[object Object]';
        },
        isValue: function(obj) {
            return !this.isObject(obj) && !this.isArray(obj);
        }
    }
}();


var result = deepDiffMapper.map({
        a:'i am unchanged',
        b:'i am deleted',
        e:{ a: 1,b:false, c: null},
        f: [1,{a: 'same',b:[{a:'same'},{d: 'delete'}]}],
        g: new Date('2017.11.25')
    },
    {
        a:'i am unchanged',
        c:'i am created',
        e:{ a: '1', b: '', d:'created'},
        f: [{a: 'same',b:[{a:'same'},{c: 'create'}]},1],
        g: new Date('2017.11.25')
    });
console.log(result);