var array = [4,5,6,7,8];
var singleVal = 0;

// 只能在这一行下面写代码

singleVal = array.reduce(function (previousVal, currentVal) {
  return previousVal + currentVal;
}, 0);
