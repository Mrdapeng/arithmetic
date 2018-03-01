// regex.test()
// var regex = /hello/
// console.log(regex.test('hello'));
//横向模糊
// var regex=/ab{2,5}c/g
// var string1 = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
// console.log(regex.test('abbbbbc'))
// console.log(string1.match(regex))
//纵向比较
// var regex = /a[123]b/g;
// var string = "a0b a1b a2b a3b a4b";
// console.log(string.match(regex))
//字符组
/**
 * [1234567abcdefgFGHIJKLM] => [1-6a-fG-M]
 * [a-z] abcdefghijklmnopqrstuvwxyz
 * a或者-或者z [a/-z]或者[az-]或者[-az]
 */
/**
 * ^ 取反效果
 * [^abc] 除abc之外的任意一个字符
 */
// var regex =/e[^abc]f/
// var string1 ='edf efg'
// console.log(string1.match(regex))
/**
 * \d 0-9 表示是0-9的数字
 * \D [^0=9]
 * \w 【0-9a-zA-Z】数字大小字母下划线
 * \W [^0-9a-zA-Z] 非数字大小字母下划线
 */
/**
 * {m,} 至少出现m次
 * {m} {m.m} 表示出现m次
 * ? 出现或不出现 {0，1} 0次或者1次
 * + {1,} 表示至少出现一次 +号表示追加的意思，得现有一个才能追加
 * '*'号表示 {0,} 表示出现任意次，也就说是0个或者任意个
 * 
 */
// var regex = /a{2,}b{3}c?d+e*/g
// var string = 'aabbbddeeee aabbbddee'
// console.log(string.match(regex))
//匹配时间
// var regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
// console.log( regex.test("23:59") );
// console.log(regex2.test("11:12"))
// var regex = /^(0?[0-9]|1[0-9]|[2][0-3]):(0?[0-9]|[1-5][0-9])$/;
// console.log( regex.test("23:59") );
// console.log( regex.test("02:07") );
// console.log( regex.test("7:9") );
//匹配年份
// var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
// var regex = /^[0-9]{4}-(0[0-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])&/g
// console.log(regex.test('2011-2-11'))
// console.log(regex.test('201111-2101-1'))
var regex = /id=".*"/
var mineRegex = /id=".*?"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]);
// *  . 这二个字符都是贪婪匹配的遇到一个符合的后还会继续去匹配，因此采用 ？符号来停止贪婪匹配