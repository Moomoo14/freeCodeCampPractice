function myFunction () {
  'use strict';

  var myVar;
  console.log(myVar);
}
myFunction();

// 请先运行这段代码，并在左边的输出区域或浏览器的控制台中查看输出
// 由于 myVar 在 myFunction 内外均没有定义，因此才会有报错
// console.log(myVar);

// 现在，在 myFunction 中定义 myVar，并删掉 myFunction 外面的 console.log 那一行

