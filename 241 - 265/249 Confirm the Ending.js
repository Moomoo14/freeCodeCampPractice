function confirmEnding (str, target) {
  // 请把你的代码写在这里
  var a = target.length;
  if (str.substr(str.length-a) === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n");
