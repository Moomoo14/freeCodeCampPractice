// 初始化变量
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: []
  },
  5439: {
    album: "ABBA Gold"
  }
};
// 深拷贝 collection，用于测试
var collectionCopy = JSON.parse(JSON.stringify(collection));

// 请只修改这条注释以下的代码
function update (id, prop, value) {
  if (value != '' && prop != 'tracks') {
    collectionCopy[id][prop] = value;
  } else if (value != '' && prop == 'tracks') {
    collectionCopy[id][prop].push(value);
  } else if (value == '') {
    delete collectionCopy[id][prop];
  }
  return collection;
}

// 你可以修改这一行来测试你的代码
update(5439, "artist", "ABBA");
