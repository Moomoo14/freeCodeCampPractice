function bouncer (arr) {
  // 请把你的代码写在这里
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

bouncer([7, "ate", "", false, 9]);
