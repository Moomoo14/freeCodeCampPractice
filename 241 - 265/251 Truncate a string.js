function truncate (str, num) {
  // 请把你的代码写在这里
  if (str.length <= num) {
    return str;
  } else if (num <= 3) {
    return str.slice(0,num) + '...';
  } else {
    return str.slice(0, num-3) + '...';
  }
}

truncate("A-tisket a-tasket A green and yellow basket", 11);
