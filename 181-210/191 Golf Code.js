function golfScore (par, strokes) {
  // 请只修改这条注释以下的代码
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= (par - 2)) {
    return "Eagle";
  } else if (strokes == (par - 1)) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == (par + 1)) {
    return "Bogey";
  } else if (strokes == (par + 2)) {
    return "Double Bogey";
  } else {
    return "Go Home!";
  }
  // 请只修改这条注释以上的代码
}

// 你可以修改这一行来测试你的代码
golfScore(5, 4);

