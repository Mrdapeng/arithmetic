const time = () => {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("hhh");
    }, 1000);
  });
};
var b = time()
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  });

var xhr = new XMLHttpRequest();
xhr.open("GET", "api/v1/query");
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send(null);
for (var i = 0; i < 5; i++) {
  (function(i) {
    setTimeout(function() {
      console.log(i);
    }, i * 1000);
  })(i);
}
for (var i = 0; i < 5; i++) {
  setTimeout(
    (function(i) {
      return function() {
        console.log(i);
      };
    })(i),
    i * 1000
  );
}

var count = (function() {
  var n = 0;
  return function() {
    return n++;
  };
})();

async function async() {
  var re = await time();
  console.log(re === "hhh");
}
function deepClone(obj) {
  if (typeof obj !== "object" || typeof obj !== "function") {
    return obj;
  }
  var o = Array.isArray(obj) ? [] : {};
  for (var key in o) {
    if (o.hasOwnProptery(key)) {
      o[i] = typeof o[i] === "object" ? deepClone(o[i]) : o[i];
    }
  }
  return o;
}
function isBalanced_solve(pRoot) {
  if (!pRoot) {
    return;
  }
  return Math.abs(height(pRoot.left) - height(pRoot.right)) <= 1;
}
function height(node) {
  if (!node) {
    return 0;
  }
  if (!node.left && !node.right) return 1;
  return Math.max(height(node.left), height(node.right)) + 1;
}
function height2(pRoot) {
  if (!pRoot) return 0;
  if (!pRoot.left && !pRoot.right) return 1;

  return Math.max(height(pRoot.left), height(pRoot.right)) + 1;
}
function isBalanced_solve2(pRoot) {
  if (!pRoot) {
    return;
  }
  return Math.abs(height(pRoot.left, pRoot.right)) <= 1;
}


function obj(o){
    function F(){}
    F.prototype=o
    return new F()
}

function inherit(superType,subType){
    var _proto=obj(superType)
    _proto.constructor=subType
    subType.prototype=_proto
}

String.prototype._trim=function(){
    return this.replace(/^\s+|\s+$/g,'')
}