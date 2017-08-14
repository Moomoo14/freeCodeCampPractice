function palindrome (str) {
  // 请把你的代码写在这里
  str = str.replace(/\W|_/g,'').toLowerCase();
  if (str.split(" ").join("").split("").reverse().join("") === str.split(" ").join("")) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");
