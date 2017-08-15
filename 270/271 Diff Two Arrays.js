function diff (arr1, arr2) {
  return arr1.filter(function (v) {
    return arr2.indexOf(v) == -1;
  }).concat(arr2.filter(function (v) {
    return arr1.indexOf(v) == -1;
  }));
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
