// 初始化变量
var testString = "How many spaces are there in this sentence?";

// 请只修改这条注释以下的代码

var expression = /\s+/g;  // 请修改这一行

// 请只修改这条注释以上的代码

// 用 spaceCount 存储 testString 中匹配到 expression 的次数
var spaceCount = testString.match(expression).length;
