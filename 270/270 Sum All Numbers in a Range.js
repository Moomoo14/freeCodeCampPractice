function sumAll (arr) {
  var arr2 = [];
  var lower = Math.min(arr[0], arr[1]);
  var upper = Math.max(arr[0], arr[1]);

  for (i = lower; i <= upper; i++) {
    arr2.push(i);
  }

  var total = arr2.reduce(function (a, b) {
    return a + b;
  });

  return total;
}

sumAll([1, 4]);
