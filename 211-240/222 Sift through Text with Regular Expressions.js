// 初始化变量
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

// 举例
var expressionToGetSoftware = /software/gi;
var softwareCount = testString.match(expressionToGetSoftware).length;


// 请只修改这条注释以下的代码

var expression = /and/gi;  // 请修改这一行

// 请只修改这条注释以上的代码

// 用 andCount 存储 testString 中匹配到 expression 的次数
var andCount = testString.match(expression).length;


