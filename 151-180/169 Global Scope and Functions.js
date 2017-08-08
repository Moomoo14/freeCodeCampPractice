// 请在这里定义变量
var myGlobal = 10;

function fun1 () {
  // 请在这里把 5 赋值给 oopsGlobal
  oopsGlobal = 5;
}

// 请只修改这条注释以上的代码
function fun2 () {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
