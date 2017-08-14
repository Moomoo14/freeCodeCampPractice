function chunk (arr, size) {
  // 请把你的代码写在这里
  var result = [];
  for (var i = 0,len = arr.length; i < len; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

chunk(["a", "b", "c", "d"], 2);
