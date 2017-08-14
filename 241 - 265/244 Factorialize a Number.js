function factorialize(num) {
  // 请把你的代码写在这里
  var result = num;
  if (num === 0) {
    return 1;
  } else {
    while (num > 1) {
      num--;
      result *= num;
    }
  }
  return result;
}

factorialize(5);
