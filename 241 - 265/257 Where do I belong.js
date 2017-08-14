function where (arr, num) {
  // 请把你的代码写在这里
  arr.push(num);

  arr.sort(function (a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

where([40, 60], 50);
