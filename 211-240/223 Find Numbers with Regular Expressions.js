// 初始化变量
var testString = "There are 3 cats but 4 dogs.";

// 请只修改这条注释以下的代码

var expression = /\d+/g;  // 请修改这一行

// 请只修改这条注释以上的代码

// 用 digitCount 存储 testString 中匹配到 expression 的次数
var digitCount = testString.match(expression).length;

