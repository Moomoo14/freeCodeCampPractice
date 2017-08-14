function mutation (arr) {
  // 请把你的代码写在这里
  str1 = arr[0].toLowerCase();
  str2 = arr[1].toLowerCase();
  for (var i = 0, len = str2.length; i < len; i++) {
      if (str1.indexOf(str2[i]) < 0) {
          return false;
      }
  }
  return true;
}

mutation(["hello", "hey"]);
