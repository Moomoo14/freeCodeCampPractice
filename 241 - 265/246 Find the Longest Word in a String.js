function findLongestWord (str) {
  // 请把你的代码写在这里
  var strSplit = str.split(" ");
  var longest = strSplit.reduce(function (longest, currentVal) {
    return  currentVal.length > longest.length ? currentVal: longest;
  }, "");

  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

