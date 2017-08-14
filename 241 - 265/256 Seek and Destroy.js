function destroyer (arr) {
  // 请把你的代码写在这里
  var removeArgs = Array.prototype.slice.call(arguments, 1);
  return arr.filter(function (value) {
    return removeArgs.indexOf(value) < 0;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
