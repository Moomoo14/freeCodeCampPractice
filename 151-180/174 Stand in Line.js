function queue (arr, item) {
  // 请把你的代码写在这里
  arr.push(item);
  return arr.shift();  // 请修改这一行
}

// 初始化测试数据
var testArr = [1, 2, 3, 4, 5];

// 控制台输出
console.log("Before: " + JSON.stringify(testArr));
console.log(queue(testArr, 6)); // 你可以修改这一行来测试你的代码
console.log("After: " + JSON.stringify(testArr));
