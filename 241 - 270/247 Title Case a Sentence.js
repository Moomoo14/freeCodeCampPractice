function titleCase (str) {
  // 请把你的代码写在这里
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

titleCase("I'm a little tea pot");
