//字符串全排列    输入一个字符串,按字典序打印出该字符串中字符的所有排列。
// 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。

// function Permutation(str)
// {
//     var res = []
//     if(str.length <= 0)return res
//     var sortTemp = ''
//     var arr = str.split('')
//     res = sortString(arr, sortTemp, res)
//     return res
// }
// function sortString(arr, sortTemp, res){
//     if(arr.length == 0)res.push(sortTemp)
//     var isRepeted = {}
//     for(var i = 0; i < arr.length; i++){
//         if(!isRepeted[arr[i]]){
//             var temp = arr.splice(i, 1)[0]
//             sortTemp += temp
//             sortString(arr, sortTemp, res)
//             arr.splice(i, 0, temp)
//             sortTemp = sortTemp.slice(0, sortTemp.length - 1)
//             isRepeted[temp] = true
//         }
//     }
//     return res
// }
// ES6
class Permutation {
    constructor(arr) {
        this.arr = Array.from(arr);
        this.result = [];
        this.len = 0;
        this.run(0);
    }

    run(index) {
        if (index == this.arr.length - 1) {
            this.result.push(Array.from(this.arr));
            this.len++;
            return;
        }
        for(let i = index; i < this.arr.length; i++) {

            [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];
            this.run(index + 1);
            [this.arr[index], this.arr[i]] = [this.arr[i], this.arr[index]];
        }
    }
  }

  let p = new Permutation(["A", "B", "C"]);
  console.log(p.result);
  console.log(p.len);
  // [ [ 'A', 'B', 'C' ],
  //   [ 'A', 'C', 'B' ],
  //   [ 'B', 'A', 'C' ],
  //   [ 'B', 'C', 'A' ],
  //   [ 'C', 'B', 'A' ],
  //   [ 'C', 'A', 'B' ] ]
  // 6
