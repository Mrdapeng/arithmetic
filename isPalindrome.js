function isPalindrome(val) {
  val = val + "";
  if (val.length) {
    for (var i = 0, j = val.length - 1; i < j; i++, j--) {
      if (val.charAt(i) !== val.charAt(j)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
function isPalindrome2(val) {
  val = val + "";
  if (val.length) {
    var i = 0;
    var j = val.length-1;
    while (i < j) {
      if (val.charAt(i) !== val.charAt(j)) {
          return false
      }
      i++;
      j--;
    }
    return true
  }else{
      return false
  }
}

console.log(isPalindrome2(12321));