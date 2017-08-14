function repeat (str, num) {
  // 请把你的代码写在这里
  if (num <= 0) {
    return "";
  } else {
    return str.repeat(num);
  }
}

repeat("abc", 3);

