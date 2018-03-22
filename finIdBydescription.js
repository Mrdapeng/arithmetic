var docs = [
  {
    id: 1,
    words: ["hello", "world"]
  },
  {
    id: 2,
    words: ["hello", "hihi"]
  },
  {
    id: 3,
    words: ["haha", "hello"]
  },
  {
    id: 4,
    words: ["world", "nihao"]
  }
];
findDocList(docs, ["hello"]); // 文档id1，文档id2，文档id3
findDocList(docs, ["hello", "world"]); // 文档id1
function findDocList(docs, word) {
  let ids = [];
  for (let i = 0; i < docs.length; i++) {
    let { id, words } = docs[i];
    let flag = word.every(item => {
      return words.indexOf(item) > -1;
    });
    flag && ids.push(id);
  }
  return ids;
}
console.log(findDocList(docs, ["hello", "world"]));

function _findDocList2(docs, scheme) {
  var ids = [];
  for (var i = 0; i < docs.length; i++) {
    let { id, words} = docs[i];
    if (words.join("") === scheme.join("")) {
      ids.push(id);
    }
  }
  return ids;
}


console.log(_findDocList2(docs,["hello","world"]))