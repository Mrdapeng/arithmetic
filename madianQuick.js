var maxHeap = [];
var minHeap = [];
function madianQuick(arr) {
  maxHeap.sort((a, b) => {
    return b - a;
  });
  minHeap.sort((a, b) => {
    return a - b;
  });
}
function shengxu(a, b) {
  return a - b;
}
function jiangxu(a, b) {
  return b - a;
}
function modifyHeap(maxHeap, minHeap, num) {
  if (maxHeap.length === 0) {
    maxHeap.push(num);
    maxHeap.sort((a, b) => {
      return b - a;
    });
  }
  if (maxHeap[0] >= num) {
    maxHeap.push(num);
    maxHeap.sort((a, b) => {
      return b - a;
    });
  } else {
    if (minHeap.length === 0) {
      minHeap.push(num);
      minHeap.sort((a, b) => {
        return a - b;
      });
      return;
    }
    if (minHeap[0] > num) {
      maxHeap.push(num);
      maxHeap.sort((a, b) => {
        return b - a;
      });
    } else {
      minHeap.unshift(num);
      minHeap.sort((a, b) => {
        return a - b;
      });
    }
  }
}
function getMedian() {
  var maxHeapSize = maxHeap.length;
  var minHeapSize = minHeap.length;
  if (maxHeapSize + minHeapSize == 0) {
    return;
  }
  var maxHeapHead = maxHeap[0];
  var minHeapHead = minHeap[0];
  if (minHeapSize + maxHeapSize / 2 == 0) {
    return (minHeapHead + maxHeapHead) / 2;
  }
  return maxHeapHead > minHeapSize ? maxHeapHead : minHeapHead;
}
