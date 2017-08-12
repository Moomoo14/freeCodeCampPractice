// 初始化变量
var testString = "How many non-space characters are there in this sentence?";

// 请只修改这条注释以下的代码

var expression = /\S/g;  // 请修改这一行

// 请只修改这条注释以上的代码

// 用 nonSpaceCount 存储 testString 中匹配到 expression 的次数
var nonSpaceCount = testString.match(expression).length;

