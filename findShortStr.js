/**
 * "bitcoin take over the world maybe who knows perhaps"
 */

const findShotStr = function(str) {
  var arr = str.split(" ");
  console.log(arr);
  var min = arr.splice(0,1)[0].length
  arr.forEach((item, index) => {
    if(item.length<min){
        min=item.length
    }
  });
  console.log(min);
  return min
};
findShotStr('bitcoin take over the world maybe who knows perhaps')